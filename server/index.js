const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const cors = require('cors');
// Read from root .env file
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
    const {
        fullName,
        companyName,
        companyWebsite,
        workEmail,
        phoneNumber,
        companySize,
        requirements,
        preferredLanguage
    } = req.body;

    // Validate required fields
    if (!fullName || !workEmail || !phoneNumber) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // configure the transporter
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions = {
        from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER,
        to: process.env.SMTP_TO_EMAIL || process.env.SMTP_USER, // Default to sending to self if not specified
        subject: `New Demo Request: ${companyName || fullName}`,
        html: `
            <h2>New Demo Request</h2>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Company:</strong> ${companyName}</p>
            <p><strong>Website:</strong> ${companyWebsite || 'N/A'}</p>
            <p><strong>Email:</strong> ${workEmail}</p>
            <p><strong>Phone:</strong> ${phoneNumber}</p>
            <p><strong>Company Size:</strong> ${companySize} Employees</p>
            <p><strong>Language:</strong> ${preferredLanguage}</p>
            <p><strong>Requirements:</strong></p>
            <p>${requirements || 'None specified'}</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email', details: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
