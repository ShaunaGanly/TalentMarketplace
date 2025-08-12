const express = require('express');
const router = express.Router();

const CLIENT_ID = 'your_client_id';             // Replace!
const REDIRECT_URI = 'http://localhost:5000/jobadder/callback'; // Replace!
const SCOPES = 'read write partner_jobboard offline_access';

router.get('/jobadder/login', (req, res) => {
  const state = 'random_state_string'; // For security, generate random per request
  const authUrl = `https://id.jobadder.com/connect/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${encodeURIComponent(SCOPES)}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&state=${state}`;
  res.redirect(authUrl);
});

module.exports = router;