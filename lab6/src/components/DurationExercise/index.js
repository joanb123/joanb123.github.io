import React, { useState, useEffect } from 'react';

function DurationExercise({ name, goBack }) {
  const [timer, setTimer] = useState(0); // Timer in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  const resetTimer = () => {
    setTimer(0);
    setIsActive(false);
  };

  const formatTime = (timer) => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h2>{name}</h2>
      <div>Duration: {formatTime(timer)}</div>
      <div>
        <button onClick={() => setIsActive(!isActive)}>{isActive ? 'Pause' : 'Start'}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div>
        <button onClick={goBack}>Back to Menu</button>
      </div>
    </div>
  );
}

export default DurationExercise;
