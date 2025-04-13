import React from "react";

const Home = ({ totalQuestions, duration, coins, onStart }) => {
  return (
    <div style={styles.pageContainer}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.headerText}>Sentence Completion Quiz</h1>
        <div style={styles.headerDecoration}>🧠</div>
      </header>

      {/* Main Content */}
      <main style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>Welcome to the Quiz!</h2>
          <p style={styles.subtitle}>Test your language skills by completing the sentences</p>

          <div style={styles.infoBox}>
            <div style={styles.infoItem}>
              <span style={styles.infoLabel}>Total Questions:</span>
              <span style={styles.infoValue}>{totalQuestions}</span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.infoLabel}>Total Time:</span>
              <span style={styles.infoValue}>{duration} seconds</span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.infoLabel}>Reward:</span>
              <span style={styles.infoValue}>{coins} coins</span>
            </div>
          </div>

          <div style={styles.buttonBox}>
            <button onClick={onStart} style={styles.primaryButton}>
              ▶ Start Quiz
            </button>
            <button onClick={() => alert("Back button pressed")} style={styles.secondaryButton}>
              ⬅ Back
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2025 Quiz App. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    minWidth: "100vw",
    backgroundColor: "#f5f7fa",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  header: {
    backgroundColor: "#4a6fa5",
    color: "white",
    padding: "1.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  headerText: {
    margin: 0,
    fontSize: "1.8rem",
    fontWeight: "600",
  },
  headerDecoration: {
    fontSize: "2rem",
  },
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    padding: "2.5rem",
    maxWidth: "500px",
    width: "100%",
    textAlign: "center",
  },
  title: {
    color: "#2c3e50",
    fontSize: "1.8rem",
    marginBottom: "0.5rem",
  },
  subtitle: {
    color: "#7f8c8d",
    fontSize: "1rem",
    marginBottom: "2rem",
  },
  infoBox: {
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    padding: "1.5rem",
    marginBottom: "2rem",
  },
  infoItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0.8rem",
    paddingBottom: "0.8rem",
    borderBottom: "1px solid #eaeaea",
    "&:last-child": {
      marginBottom: 0,
      paddingBottom: 0,
      borderBottom: "none",
    },
  },
  infoLabel: {
    color: "#7f8c8d",
    fontWeight: "500",
  },
  infoValue: {
    color: "#2c3e50",
    fontWeight: "600",
  },
  buttonBox: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  primaryButton: {
    backgroundColor: "#4a6fa5",
    color: "white",
    border: "none",
    padding: "0.8rem 1.5rem",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#3a5a80",
      transform: "translateY(-2px)",
    },
  },
  secondaryButton: {
    backgroundColor: "transparent",
    color: "#4a6fa5",
    border: "2px solid #4a6fa5",
    padding: "0.8rem 1.5rem",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#f0f4f8",
    },
  },
  footer: {
    backgroundColor: "#2c3e50",
    color: "#ecf0f1",
    textAlign: "center",
    padding: "1rem",
    fontSize: "0.9rem",
  },
  footerText: {
    margin: 0,
  },
};

export default Home;