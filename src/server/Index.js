const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/internal-jobs', (req, res) => {
  const jobs = JSON.parse(fs.readFileSync('./scripts/mockJobs.json', 'utf8'));
  res.json(jobs);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

