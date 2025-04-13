import React, { useState, useEffect } from "react";
import Timer from "./Timer";

const Quiz = ({ questions, onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filledWords, setFilledWords] = useState([]);
  const [results, setResults] = useState([]);
  const [timerKey, setTimerKey] = useState(0);

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    setFilledWords(Array(currentQuestion.blanks).fill(""));
  }, [currentIndex]);

  const handleWordClick = (word) => {
    const emptyIndex = filledWords.findIndex((w) => w === "");
    if (emptyIndex !== -1) {
      const updated = [...filledWords];
      updated[emptyIndex] = word;
      setFilledWords(updated);

      if (updated.every((w) => w !== "")) {
        setTimeout(() => moveToNext(updated), 400);
      }
    }
  };

  const handleBlankClick = (index) => {
    const updated = [...filledWords];
    updated[index] = "";
    setFilledWords(updated);
  };

  const moveToNext = (filled) => {
    const correct = JSON.stringify(filled) === JSON.stringify(currentQuestion.answers);
    const answerObj = {
      question: currentQuestion.sentence,
      selected: filled,
      correctAnswers: currentQuestion.answers,
      isCorrect: correct,
    };

    const updatedResults = [...results, answerObj];
    setResults(updatedResults);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setTimerKey((prev) => prev + 1);
    } else {
      onFinish(updatedResults);
    }
  };

  const handleTimeout = () => {
    moveToNext(filledWords);
  };

  const handleQuit = () => {
    const confirmQuit = window.confirm("Are you sure you want to quit the quiz?");
    if (confirmQuit) {
      onFinish(results);
    }
  };

  return (
    <div style={styles.pageContainer}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.headerText}>Sentence Completion Quiz</h1>
          <div style={styles.headerDecoration}>🧠</div>
        </div>
      </header>

      <main style={styles.container}>
        <div style={styles.quizCard}>
          <div style={styles.quizHeader}>
            <h2 style={styles.questionHeader}>
              Question {currentIndex + 1} of {questions.length}
            </h2>
            <button onClick={handleQuit} style={styles.quitBtn}>Quit</button>
          </div>

          <div style={styles.timerContainer}>
            <Timer duration={30} onTimeout={handleTimeout} key={timerKey} />
          </div>

          <div style={styles.questionCard}>
            <p style={styles.sentence}>
              {(() => {
                const words = currentQuestion.sentence.split(" ");
                let blankCounter = 0;
                return words.map((word, index) => {
                  if (word.includes("___")) {
                    const currentBlankIndex = blankCounter;
                    const filled = filledWords[blankCounter];
                    blankCounter++;
                    return (
                      <span
                        key={index}
                        onClick={() => handleBlankClick(currentBlankIndex)}
                        style={filled ? styles.filledBlank : styles.blank}
                      >
                        {filled || "____"}
                      </span>
                    );
                  }
                  return <span key={index}> {word} </span>;
                });
              })()}
            </p>
          </div>

          <div style={styles.optionsContainer}>
            <h3 style={styles.optionsTitle}>Select words:</h3>
            <div style={styles.optionsGrid}>
              {currentQuestion.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleWordClick(opt)}
                  style={{
                    ...styles.optionBtn,
                    backgroundColor: filledWords.includes(opt) ? "#ccc" : "#f0f0f0",
                  }}
                  disabled={filledWords.includes(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2025 Quiz App</p>
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
    backgroundColor: "#f0f2f5",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  header: {
    backgroundColor: "#4a6fa5",
    color: "white",
    padding: "1.5rem",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  headerContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
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
  quizCard: {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    padding: "2rem",
    maxWidth: "800px",
    width: "100%",
  },
  quizHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",
    borderBottom: "1px solid #eaeaea",
    paddingBottom: "1rem",
  },
  questionHeader: {
    color: "#2c3e50",
    fontSize: "1.3rem",
    margin: 0,
  },
  quitBtn: {
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    fontSize: "0.9rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#c0392b",
    },
  },
  timerContainer: {
    marginBottom: "1.5rem",
  },
  questionCard: {
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    padding: "1.5rem",
    marginBottom: "2rem",
    borderLeft: "4px solid #4a6fa5",
  },
  sentence: {
    color: "#2c3e50",
    fontSize: "1.2rem",
    lineHeight: "1.6",
    margin: 0,
  },
  blank: {
    display: "inline-block",
    minWidth: "60px",
    borderBottom: "2px dashed #7f8c8d",
    color: "#7f8c8d",
    cursor: "pointer",
    padding: "0 4px",
    margin: "0 2px",
    textAlign: "center",
    transition: "all 0.2s ease",
  },
  filledBlank: {
    display: "inline-block",
    minWidth: "60px",
    backgroundColor: "#e3f2fd",
    color: "#1976d2",
    fontWeight: "600",
    borderRadius: "4px",
    cursor: "pointer",
    padding: "0 4px",
    margin: "0 2px",
    textAlign: "center",
    transition: "all 0.2s ease",
    borderBottom: "2px solid #1976d2",
  },
  optionsContainer: {
    marginTop: "1rem",
  },
  optionsTitle: {
    color: "#7f8c8d",
    fontSize: "1rem",
    marginBottom: "1rem",
  },
  optionsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
    gap: "0.8rem",
  },
  optionBtn: {
    backgroundColor: "#f0f4f8",
    color: "#2c3e50",
    border: "none",
    padding: "0.8rem",
    borderRadius: "6px",
    fontSize: "0.95rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#d6e4f0",
    },
    "&:disabled": {
      backgroundColor: "#e0e0e0",
      color: "#9e9e9e",
      cursor: "not-allowed",
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

export default Quiz;