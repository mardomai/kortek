const dotenv = require('dotenv');

// Load environment variables first
dotenv.config();

const express = require('express');
const { createServer: createViteServer } = require('vite');
const stripeMiddleware = require('./server/middleware');
const cors = require('cors');
const paymentRoutes = require('./server/routes/payment');
const multer = require('multer');
const nodemailer = require('nodemailer');

async function createServer() {
  const app = express();
  
  // Enable CORS first
  app.use(cors());
  
  // Handle Stripe webhook raw body before JSON parser
  app.use('/api/stripe/webhook', express.raw({ type: 'application/json' }));
  
  // Parse JSON payloads for other routes
  app.use(express.json());

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

      // Check if email configuration is present
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error('Missing email configuration:', {
          hasEmailUser: !!process.env.EMAIL_USER,
          hasEmailPass: !!process.env.EMAIL_PASS
        });
        return res.status(500).json({ 
          error: 'Email configuration missing',
          details: 'Please check your .env file for EMAIL_USER and EMAIL_PASS'
        });
      }

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
        // Test the connection before sending
        await transporter.verify();
        console.log('SMTP connection verified successfully');

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info);
        res.status(200).json({ message: 'Email sent successfully', info });
      } catch (emailError) {
        console.error('Email sending error:', {
          name: emailError.name,
          message: emailError.message,
          code: emailError.code,
          command: emailError.command,
          response: emailError.response,
          stack: emailError.stack
        });
        res.status(500).json({ 
          error: 'Failed to send email',
          details: emailError.message,
          code: emailError.code
        });
      }
    } catch (error) {
      console.error('Request processing error:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      res.status(500).json({ 
        error: 'Request processing failed',
        details: error.message,
        stack: error.stack
      });
    }
  });

  // Use Stripe middleware for API routes
  app.use('/api', stripeMiddleware);
  
  // Use payment routes
  app.use('/api', paymentRoutes);

  // Create Vite server in middleware mode and use its middleware last
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa'
  });

  app.use(vite.middlewares);

  const port = process.env.PORT || 5173;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

createServer().catch((err) => {
  console.error('Error starting server:', err);
  process.exit(1);
}); 