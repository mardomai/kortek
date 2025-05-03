const nodemailer = require('nodemailer');
const multer = require('multer');
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
    files: 2 // Maximum 2 files
  }
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Handle file uploads
  upload.array('files')(req, res, async (err) => {
    if (err) {
      console.error('File upload error:', err);
      return res.status(400).json({ error: 'File upload failed' });
    }

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
}; 