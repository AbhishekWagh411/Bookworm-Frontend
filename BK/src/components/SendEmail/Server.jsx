const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

// Middleware
app.use(bodyParser.json());

// Route to handle form submission
app.post('/sendMail', (req, res) => {
  const { name, email, message } = req.body;

  // Create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    // You should provide your email service configuration here
    // For example, if you are using Gmail, you need to provide your Gmail SMTP details
    // Visit Nodemailer documentation for more details: https://nodemailer.com/about/
    host: 'smtp.example.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'your_email@example.com', // Your email address
      pass: 'your_password', // Your email password
    },
  });

  // Setup email data with unicode symbols
  let mailOptions = {
    from: '"Your Name" <your_email@example.com>', // Sender address
    to: email, // List of receivers
    subject: 'Contact Form Submission', // Subject line
    text: `Hello ${name},\n\nThank you for contacting us. Your message:\n\n${message}`, // Plain text body
    // html: '<b>Hello world?</b>' // You can use HTML format as well
  };

  // Send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
