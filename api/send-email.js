import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

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

    // DEBUG: Temporarily return config info to diagnose env var issues
    // REMOVE THIS AFTER DEBUGGING
    const smtpConfig = {
        host: process.env.SMTP_HOST || '(not set)',
        port: process.env.SMTP_PORT || '(not set)',
        secure: process.env.SMTP_SECURE || '(not set)',
        user: process.env.SMTP_USER ? '✓ set' : '✗ missing',
        pass: process.env.SMTP_PASS ? '✓ set' : '✗ missing',
    };

    return res.status(200).json({
        debug: true,
        message: 'Debug mode - showing env var status',
        config: smtpConfig
    });

    // Configure the transporter
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions = {
        from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER,
        to: process.env.SMTP_TO_EMAIL || process.env.SMTP_USER,
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
        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to send email', details: error.message });
    }
}
