import React, { useState } from "react";
import Quiz from "./components/Quiz";
import Feedback from "./components/Feedback";
import Home from "./components/Home";
import questions from "./data/questions.json";

const App = () => {
  const [step, setStep] = useState("home"); // home | quiz | feedback
  const [results, setResults] = useState([]);

  const handleStartQuiz = () => {
    setStep("quiz");
  };

  const handleFinish = (finalResults) => {
    setResults(finalResults);
    setStep("feedback");
  };

  const handleBack = () => {
    setStep("home");
    setResults([]);
  };

  return (
    <div>
      {step === "home" && (
        <Home
          totalQuestions={questions.length}
          duration={30 * questions.length}
          coins={10}
          onStart={handleStartQuiz}
        />
      )}
      {step === "quiz" && (
        <Quiz questions={questions} onFinish={handleFinish} />
      )}
      {step === "feedback" && <Feedback results={results} onBack={handleBack} />}
    </div>
  );
};

export default App;
