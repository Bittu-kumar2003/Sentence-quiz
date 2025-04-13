import React from "react";

const Feedback = ({ results }) => {
  const score = results.filter((res) => res.isCorrect).length;
  const percentage = Math.round((score / results.length) * 100);

  return (
    <div style={styles.pageContainer}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.headerText}>Quiz Results</h1>
        <div style={styles.trophy}>🏆</div>
      </header>

      {/* Main Content */}
      <div style={styles.content}>
        {/* Score Summary */}
        <div style={styles.scoreSummary}>
          <h2 style={styles.completedText}>Quiz Completed!</h2>
          <div style={styles.scoreContainer}>
            <div style={styles.scoreCircle}>
              <span style={styles.score}>{score}</span>
              <span style={styles.total}>/{results.length}</span>
            </div>
            <div style={percentage >= 70 ? styles.highScore : percentage >= 50 ? styles.mediumScore : styles.lowScore}>
              {percentage}% Correct
            </div>
          </div>
        </div>

        {/* Results Details */}
        <div style={styles.resultsContainer}>
          <h3 style={styles.resultsTitle}>Your Answers:</h3>
          <ul style={styles.resultsList}>
            {results.map((res, idx) => (
              <li key={idx} style={styles.resultItem}>
                <p style={styles.question}>
                  <strong>Q{idx + 1}:</strong> {res.question}
                </p>
                <p style={styles.answer}>
                  <strong>Your answer:</strong>{" "}
                  <span style={res.isCorrect ? styles.correctAnswer : styles.incorrectAnswer}>
                    {res.selected.join(", ")}
                  </span>
                </p>
                {!res.isCorrect && (
                  <p style={styles.correct}>
                    <strong>Correct answer:</strong> {res.correctAnswers.join(", ")}
                  </p>
                )}
                <div style={res.isCorrect ? styles.correctBadge : styles.incorrectBadge}>
                  {res.isCorrect ? "Correct ✅" : "Incorrect ❌"}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <button 
          onClick={() => window.location.href = "/"} 
          style={styles.dashboardButton}
        >
          Go to Dashboard
        </button>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>© {new Date().getFullYear()} Quiz App. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  pageContainer: {
    minHeight: "100vh",
    minWidth: "100vw",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f5f7fa",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  header: {
    backgroundColor: "#4a6fa5",
    color: "white",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  headerText: {
    margin: 0,
    fontSize: "24px",
    fontWeight: "600",
  },
  trophy: {
    fontSize: "28px",
  },
  content: {
    flex: 1,
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    width: "100%",
  },
  scoreSummary: {
    textAlign: "center",
    marginBottom: "30px",
    paddingBottom: "20px",
    borderBottom: "1px solid #e0e0e0",
  },
  completedText: {
    color: "#2c3e50",
    marginBottom: "15px",
  },
  scoreContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  scoreCircle: {
    backgroundColor: "#e3f2fd",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "4px solid #4a6fa5",
    marginBottom: "10px",
  },
  score: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#2c3e50",
  },
  total: {
    fontSize: "18px",
    color: "#7f8c8d",
  },
  highScore: {
    color: "#27ae60",
    fontWeight: "600",
    fontSize: "18px",
  },
  mediumScore: {
    color: "#f39c12",
    fontWeight: "600",
    fontSize: "18px",
  },
  lowScore: {
    color: "#e74c3c",
    fontWeight: "600",
    fontSize: "18px",
  },
  resultsContainer: {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    marginBottom: "20px",
  },
  resultsTitle: {
    color: "#2c3e50",
    marginTop: 0,
    paddingBottom: "10px",
    borderBottom: "1px solid #eee",
  },
  resultsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  resultItem: {
    padding: "15px 0",
    borderBottom: "1px solid #f0f0f0",
    position: "relative",
  },
  question: {
    color: "#2c3e50",
    margin: "0 0 10px 0",
  },
  answer: {
    color: "#34495e",
    margin: "5px 0",
  },
  correct: {
    color: "#7f8c8d",
    margin: "5px 0 0 0",
  },
  correctAnswer: {
    color: "#27ae60",
    fontWeight: "500",
  },
  incorrectAnswer: {
    color: "#e74c3c",
    fontWeight: "500",
  },
  correctBadge: {
    position: "absolute",
    top: "15px",
    right: "0",
    backgroundColor: "#e8f5e9",
    color: "#27ae60",
    padding: "3px 10px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "600",
  },
  incorrectBadge: {
    position: "absolute",
    top: "15px",
    right: "0",
    backgroundColor: "#ffebee",
    color: "#e74c3c",
    padding: "3px 10px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "600",
  },
  dashboardButton: {
    backgroundColor: "#4a6fa5",
    color: "white",
    border: "none",
    padding: "12px 25px",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    display: "block",
    width: "100%",
    maxWidth: "200px",
    margin: "0 auto",
    transition: "all 0.3s ease",
  },
  footer: {
    backgroundColor: "#2c3e50",
    color: "#ecf0f1",
    textAlign: "center",
    padding: "15px",
    fontSize: "14px",
  },
  footerText: {
    margin: 0,
  },
};

export default Feedback;