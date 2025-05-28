const express = require('express');
const cors = require('cors');
const multer = require('multer');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const stripeRoutes = require('./api/stripe');

// Use routes
app.use('/api/stripe', stripeRoutes);

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
    files: 2 // Maximum 2 files
  }
});

// Configure nodemailer
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  debug: true,
  logger: true
});

// Verify email configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Email configuration error:', error);
  } else {
    console.log('Email server is ready');
  }
});

// Email sending endpoint
app.post('/api/send-email', upload.array('files'), async (req, res) => {
  try {
    console.log('Received request body:', req.body);
    console.log('Received files:', req.files ? req.files.length : 0);

    if (!req.body.to || !req.body.from || !req.body.subject || !req.body.text) {
      console.error('Missing required fields:', req.body);
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const { to, from, subject, text } = req.body;
    
    // Process attachments if any files were uploaded
    const attachments = req.files ? req.files.map(file => ({
      filename: file.originalname,
      content: file.buffer
    })) : [];

    const mailOptions = {
      from: `"${from}" <${process.env.EMAIL_USER}>`,
      replyTo: from,
      to: to,
      subject: subject,
      text: text,
      attachments: attachments
    };

    console.log('Attempting to send email with options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject,
      hasAttachments: attachments.length > 0
    });

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (emailError) {
      console.error('Email sending error:', {
        name: emailError.name,
        message: emailError.message,
        code: emailError.code,
        command: emailError.command,
        response: emailError.response
      });
      res.status(500).json({ 
        error: 'Failed to send email',
        details: emailError.message
      });
    }
  } catch (error) {
    console.error('Request processing error:', error);
    res.status(500).json({ 
      error: 'Request processing failed',
      details: error.message
    });
  }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../dist')));

// The "catchall" handler for any request that doesn't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 