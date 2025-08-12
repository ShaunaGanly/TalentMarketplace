const express = require('express');
const router = express.Router();
const axios = require('axios');

const JOBADDER_TOKEN = 'YOUR_JOBADDER_ACCESS_TOKEN'; // <-- Replace with your token

router.post('/jobadder-apply', async (req, res) => {
  const { jobId, name, email, coverLetter } = req.body;
  try {
    const response = await axios.post(
      `https://api.jobadder.com/v2/jobs/${jobId}/applications`,
      {
        candidate: { name, email },
        coverLetter
      },
      { headers: { Authorization: `Bearer ${JOBADDER_TOKEN}` } }
    );
    res.json({ success: true, applicationId: response.data.id });
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit application', details: err.message });
  }
});

module.exports = router;