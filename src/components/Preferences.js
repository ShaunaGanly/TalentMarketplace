import React, { useState } from 'react';


const departments = [
  "Retail Banking",
  "Business Banking",
  "IT & Digital",
  "Risk & Compliance",
  "Marketing",
  "People & Culture",
  "Credit & Accounts Management",
  "Lending Operations",
  "Data & AI",
  "Products & Propositions",
  "Finance",
  // Add more as needed
];

const locations = [
  "Perth CBD",
  "Brisbane Office",
  "Coffs Harbour Office",
  "WA Branches (North)",
  "WA Branches (South)",
  "Brisbane Branches",
  "NSW Branches"
  // Add more as needed
];

const levels = [
  "Staff",
  "Specialist",
  "Team Leader",
  "Management",
  "Executive",
  // Add more as needed
];


function Preferences() {
  const [roleTitle, setRoleTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');
  const [level, setLevel] = useState('');
  const [emailAlert, setEmailAlert] = useState(true);
  const [preferredEmail, setPreferredEmail] = useState('');
  const [saved, setSaved] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSaved(true);
    fetch("http://localhost:5000/api/preferences", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        roleTitle,
        department,
        location,
        level,
        emailAlert,
        email: preferredEmail
      })
    })
  }

  return (
    <div className="card bg-teal" style={{ color: "#fff", marginTop: "2em" }}>
      <h2 className="text-white" style={{ marginBottom: "1em" }}>
        Set Your Vacancy Preferences
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1em" }}>
          <label style={{ fontWeight: 700 }}>
            Role Title:
            <input
              type="text"
              value={roleTitle}
              onChange={e => setRoleTitle(e.target.value)}
              placeholder="e.g. Product Manager"
              style={{
                marginLeft: "3em",
                padding: "0.5em",
                borderRadius: "6px",
                border: "1px solid #fff",
                width: "60%",
                fontSize: "1em"
              }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "1em" }}>
          <label style={{ fontWeight: 700 }}>
            Department:
            <select
              value={department}
              onChange={e => setDepartment(e.target.value)}
              style={{
                marginLeft: "1.5em",
                padding: "0.5em",
                borderRadius: "6px",
                border: "1px solid #fff",
                fontSize: "1em",
                background: "#fff",
                color: "#003E67"
              }}
            >
              <option value="">Select department</option>
              {departments.map(dep => (
                <option value={dep} key={dep}>{dep}</option>
              ))}
            </select>
          </label>
        </div>
        <div style={{ marginBottom: "1em" }}>
          <label style={{ fontWeight: 700 }}>
            Location:
            <select
              value={location}
              onChange={e => setLocation(e.target.value)}
              style={{
                marginLeft: "3.2em",
                padding: "0.5em",
                borderRadius: "6px",
                border: "1px solid #fff",
                fontSize: "1em",
                background: "#fff",
                color: "#003E67"
              }}
            >
              <option value="">Select location</option>
              {locations.map(loc => (
                <option value={loc} key={loc}>{loc}</option>
               ))}
            </select>
          </label>
        </div>
        <div style={{ marginBottom: "1em" }}>
          <label style={{ fontWeight: 700 }}>
            Preferred Email:
            <input
              type="text"
              value={preferredEmail}
              onChange={e => setpreferredEmail(e.target.value)}
              placeholder="e.g. shauna@pnbank.com.au"
              style={{
                marginLeft: "1.5em",
                padding: "0.5em",
                borderRadius: "6px",
                border: "1px solid #fff",
                width: "60%",
                fontSize: "1em"
              }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "1em" }}>
          <label style={{ fontWeight: 700 }}>
            Level:
            <select
              value={level}
              onChange={e => setLevel(e.target.value)}
              style={{
                marginLeft: "5em",
                padding: "0.5em",
                borderRadius: "6px",
                border: "1px solid #fff",
                fontSize: "1em",
                background: "#fff",
                color: "#003E67"
              }}
            >
            <option value="">Select level</option>
              {levels.map(lvl => (
               <option value={lvl} key={lvl}>{lvl}</option>
              ))}
            </select>
          </label>
</div>
        <div style={{ marginBottom: "1em" }}>
          <label style={{ fontWeight: 700 }}>
            <input
              type="checkbox"
              checked={emailAlert}
              onChange={e => setEmailAlert(e.target.checked)}
              style={{ marginRight: "0.5em" }}
            />
            Email me when a matching vacancy is posted
          </label>
        </div>
        <button type="submit" style={{
          background: "#C75892",
          color: "#fff",
          fontWeight: 700,
          borderRadius: "6px",
          padding: "0.7em 2em",
          border: "none",
          fontSize: "1.1em",
          marginTop: "1em",
          boxShadow: "0 2px 8px rgba(199,88,146,0.08)"
        }}>
          Save Preferences
        </button>
      </form>
      {saved && (
        <div style={{
          marginTop: "2em",
          background: "#fff",
          color: "#39A296",
          padding: "1em",
          borderRadius: "8px",
          fontWeight: "bold",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
        }}>
          Preferences saved! You will receive email alerts for matching vacancies.
        </div>
      )}
    </div>
  );
}

export default Preferences;