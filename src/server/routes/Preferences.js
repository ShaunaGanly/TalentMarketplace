require('dotenv').config();
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

let preferences = [];

// Save employee's job preferences
router.post('/preferences', (req, res) => {
  const { email, ...rest } = req.body;
  if (!email && rest.emailAlert) {
    return res.status(400).json({ error: "Email is required for alerts." });
  }

  preferences.push(req.body);
  res.json({ saved: true });
});


// Simulate posting a new job and trigger alerts to matching employees
router.post('/simulate-new-job', async (req, res) => {
  const newJob = req.body;
  for (const pref of preferences) {
    const matches =
  (!pref.roleTitle || newJob.title.toLowerCase().includes(pref.roleTitle.toLowerCase())) &&
  (!pref.department || newJob.department.toLowerCase() === pref.department.toLowerCase()) &&
  (!pref.location || newJob.location.toLowerCase() === pref.location.toLowerCase()) &&
  (!pref.level || newJob.level.toLowerCase() === pref.level.toLowerCase()) &&
  pref.emailAlert;

   if (matches) {
  console.log(`✅ Alert sent to ${pref.email} for job: ${newJob.title}`);
  await sendEmailAlert(pref.email, newJob);
}

  }
  res.json({ alertsSent: true });
});

router.post('/preferences', (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: "Valid email is required." });
  }

  preferences.push(req.body);
  res.json({ saved: true });
});


// Setup nodemailer (use your own email credentials)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

async function sendEmailAlert(employeeEmail, job) {
  await transporter.sendMail({
    from: '"P&N Bank Careers" <recruitment@pnbank.com.au>',
    to: employeeEmail,
    subject: `New Vacancy: ${job.title}`,
    text: `A new job matching your preferences has been posted!\n${job.title}\nDepartment: ${job.department}\nLocation: ${job.location}\nClassification: ${job.level}\nLogin to apply.`
  });
}

module.exports = router;