import React, { useState, useEffect } from 'react';

const RunningExercise = ({ goBack }) => {
  const [lapTimes, setLapTimes] = useState([]);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      const startTime = Date.now() - elapsedTime;
      intervalId = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 100);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, elapsedTime]);

  const handleStartStopClick = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const recordLap = () => {
    if (isRunning) {
      setLapTimes([...lapTimes, elapsedTime]);
      setIsRunning(false);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const tenths = Math.floor((time % 1000) / 100);
    return `${minutes}:${seconds.toString().padStart(2, '0')}.${tenths}`;
  };

  return (
    <div>
      <h3>Running Exercise</h3>
      <div className="stopwatch">{formatTime(elapsedTime)}</div>
      <button onClick={handleStartStopClick} disabled={isRunning}>
        Start
      </button>
      <button onClick={recordLap} disabled={!isRunning}>
        Stop
      </button>
      <div>
        <h4>Laps</h4>
        {lapTimes.map((time, index) => (
          <div key={index}>{`Lap ${index + 1}: ${formatTime(time)}`}</div>
        ))}
      </div>
      <button onClick={() => {
        setIsRunning(false);
        goBack();
      }}>Back to Menu</button>
    </div>
  );
};

export default RunningExercise;
