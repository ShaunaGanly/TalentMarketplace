import React from 'react';

function Home() {
  return (
    <div className="card bg-navy" style={{
      color: "#fff",
      padding: "2em",
      borderRadius: "16px",
      boxShadow: "0 4px 24px rgba(0,62,103,0.08)",
      marginTop: "2em",
      marginBottom: "2em"
    }}>
      <h1 className="text-white" style={{
        fontSize: "2.5em",
        fontWeight: 700,
        marginBottom: "0.5em",
        letterSpacing: "0.02em"
      }}>
        Welcome to P&N Group's Talent Marketplace
      </h1>
      <p style={{
        fontSize: "1.25em",
        fontWeight: 400,
        marginBottom: "2em",
        color: "#fff"
      }}>
        Find your next opportunity, set your preferences and apply for jobs with us!
      </p>
      <div style={{
        display: "flex",
        gap: "2em",
        flexWrap: "wrap",
        marginBottom: "2em",
        justifyContent: "center"
      }}>
        <div className="card bg-teal" style={{
          color: "#fff",
          minWidth: "260px",
          flex: "1",
          maxWidth: "340px",
          borderRadius: "12px",
          boxShadow: "0 2px 12px rgba(57,162,150,0.08)",
          border: "none"
        }}>
          <h2 className="text-white" style={{ marginBottom: "0.5em", fontSize: "1.3em", fontWeight: 700 }}>Explore Jobs</h2>
          <p style={{ marginBottom: "1em" }}>Browse current openings and discover your next role at P&N Group.</p>
          <a href="/jobs">
            <button style={{
              background: "#C75892",
              color: "#fff",
              fontWeight: 700,
              borderRadius: "6px",
              padding: "0.6em 1.4em",
              border: "none",
              fontSize: "1em"
            }}>View Jobs</button>
          </a>
        </div>
        <div className="card bg-purple" style={{
          color: "#fff",
          minWidth: "260px",
          flex: "1",
          maxWidth: "340px",
          borderRadius: "12px",
          boxShadow: "0 2px 12px rgba(131,138,221,0.08)",
          border: "none"
        }}>
          <h2 className="text-white" style={{ marginBottom: "0.5em", fontSize: "1.3em", fontWeight: 700 }}>Set Preferences</h2>
          <p style={{ marginBottom: "1em" }}>Tailor your search by location and role type to find the perfect fit.</p>
          <a href="/preferences">
            <button style={{
              background: "#003E67",
              color: "#fff",
              fontWeight: 700,
              borderRadius: "6px",
              padding: "0.6em 1.4em",
              border: "none",
              fontSize: "1em"
            }}>Set Preferences</button>
          </a>
        </div>
        <div className="card bg-fuchsia" style={{
          color: "#fff",
          minWidth: "260px",
          flex: "1",
          maxWidth: "340px",
          borderRadius: "12px",
          boxShadow: "0 2px 12px rgba(199,88,146,0.08)",
          border: "none"
        }}>
          <h2 className="text-white" style={{ marginBottom: "0.5em", fontSize: "1.3em", fontWeight: 700 }}>How to Apply</h2>
          <p style={{ marginBottom: "1em" }}>Learn about our application process and tips for success.</p>
          <a href="/how-to-apply">
            <button style={{
              background: "#39A296",
              color: "#fff",
              fontWeight: 700,
              borderRadius: "6px",
              padding: "0.6em 1.4em",
              border: "none",
              fontSize: "1em"
            }}>Application Guide</button>
          </a>
        </div>
      </div>
      <div style={{
        background: "#fff",
        color: "#003E67",
        borderRadius: "8px",
        padding: "1em",
        fontWeight: "bold",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        textAlign: "center",
        fontSize: "1.15em"
      }}> P&N Group is committed to creating a diverse and inclusive workplace. We encourage applications from all backgrounds and experiences.If you need assistance or require flexibility to be able to fully participate in the application process, please email us at recruitment@pnbank.com.au
      </div>
    </div>
  );
}

export default Home;