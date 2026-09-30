import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running]);

  const reset = () => {
    setRunning(false);
    setSeconds(0);
  };

  return (
    <div>
      <h2>{seconds} seconds</h2>

      <button onClick={() => setRunning(true)}>
        Start
      </button>

      <button onClick={() => setRunning(false)}>
        Pause
      </button>

      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;