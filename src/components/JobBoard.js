import React, { useEffect, useState } from "react";
import mockJobs from "../data/mockJobs.json";


function JobBoard() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
  fetch("http://localhost:5000/api/internal-jobs")
    .then(res => res.json())
    .then(data => setJobs(data))
    .catch(err => {
      console.error("Failed to fetch jobs:", err);
    });
}, []);

  const handleApply = (job) => {
    setSelectedJob(job);
    setSubmitted(false);
    setName('');
    setEmail('');
    setCoverLetter('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/jobadder-apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jobId: selectedJob.id,
        name,
        email,
        coverLetter
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setSubmitted(true);
        } else {
          alert("There was a problem submitting your application.");
        }
      })
      .catch(err => {
        alert("There was a problem submitting your application.");
        console.error(err);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Internal Vacancies</h2>
      <div className="row">
        {jobs.length === 0 ? (
          <p>No jobs available.</p>
        ) : (
          jobs.map(job => (
            <div className="col-md-6" key={job.id}>
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{job.title}</h5>
                  <p className="card-text">
                    <strong>Department:</strong> {job.department}<br />
                    <strong>Location:</strong> {job.location}<br />
                    <strong>Classification:</strong> {job.level}
                  </p>
                  {job.applyUrl ? (
                    <a
                        href={job.applyUrl || job.jobUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-primary"
>
  Apply via JobAdder
                    </a>
                  ) : (
                    <button className="btn btn-outline-primary" onClick={() => handleApply(job)}>
                      Apply Internally
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {selectedJob && (
        <div className="mt-5">
          <h3>Apply for: {selectedJob.title}</h3>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Cover Letter</label>
                <textarea
                  className="form-control"
                  rows="5"
                  value={coverLetter}
                  onChange={e => setCoverLetter(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success">Submit Application</button>
            </form>
          ) : (
            <div className="alert alert-success mt-3">
              ✅ Thank you for your application!
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default JobBoard;          