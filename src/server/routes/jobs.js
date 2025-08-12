const express = require('express');
const router = express.Router();
const axios = require('axios');

// Replace with your JobAdder API token (use OAuth2 in production)
const JOBADDER_TOKEN = 'YOUR_JOBADDER_ACCESS_TOKEN'; // <-- Replace with your token

router.get('/internal-jobs', async (req, res) => {
  try {
    const response = await axios.get('https://api.jobadder.com/v2/jobs', {
      headers: { Authorization: `Bearer ${JOBADDER_TOKEN}` }
    });
    // Filter jobs for internal posting (customize as needed)
    const internalJobs = response.data.items.filter(job => job.internalFlag); // Adjust filter!
    res.json(internalJobs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch jobs', details: err.message });
  }
});

module.exports = router;