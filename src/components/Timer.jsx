import React, { useEffect, useState } from "react";

const Timer = ({ duration, onTimeout }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeout();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const progressPercent = ((duration - timeLeft) / duration) * 100;

  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ marginBottom: "5px" }}>⏱ Time Left: {timeLeft}s</div>
      <div style={{
        width: "100%",
        height: "10px",
        backgroundColor: "#ddd",
        borderRadius: "5px",
        overflow: "hidden"
      }}>
        <div
          style={{
            width: `${progressPercent}%`,
            height: "100%",
            backgroundColor: progressPercent > 70 ? "#f87171" : "#60a5fa",
            transition: "width 1s linear"
          }}
        />
      </div>
    </div>
  );
};

export default Timer;
