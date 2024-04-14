import React, { useState } from 'react';

function RepetitionExercise({ name, goBack }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{name}</h2>
      <div>Repetitions: {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <div>
        <button onClick={goBack}>Back to Menu</button>
      </div>
    </div>
  );
}

export default RepetitionExercise;

