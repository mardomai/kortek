const express = require('express');
const cors = require('cors');
const multer = require('multer');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = 3001;

// Middleware
app.use(cors());
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
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Email sending endpoint
app.post('/api/send-email', upload.array('files'), async (req, res) => {
  try {
    const { to, from, subject, text } = req.body;
    
    // Process attachments if any files were uploaded
    const attachments = req.files ? req.files.map(file => ({
      filename: file.originalname,
      content: file.buffer
    })) : [];

    const mailOptions = {
      from: `"${from}" <${process.env.EMAIL_USER}>`, // Use authenticated email as sender
      replyTo: from, // Set reply-to as the form submitter's email
      to: to,
      subject: subject,
      text: text,
      attachments: attachments
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 