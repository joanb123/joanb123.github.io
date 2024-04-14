import React, { useState } from 'react';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';
import RunningExercise from './components/RunningExercise'; // Make sure this import path is correct
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('menu');

  const exerciseMenu = [
    { name: 'Push Ups', type: 'Repetition' },
    { name: 'Plank', type: 'Duration' },
    { name: 'Running', type: 'Running' } // Added Running to the menu
  ];

  const renderExercise = (exercise) => {
    switch (exercise.type) {
      case 'Repetition':
        return <RepetitionExercise name={exercise.name} goBack={() => setCurrentScreen('menu')} />;
      case 'Duration':
        return <DurationExercise name={exercise.name} goBack={() => setCurrentScreen('menu')} />;
      case 'Running': // Handling the Running type
        return <RunningExercise goBack={() => setCurrentScreen('menu')} />;
      default:
        return <div>Select an exercise from the menu</div>;
    }
  };

  return (
    <div className="App">
      {currentScreen === 'menu' ? (
        <div>
          <div><h2>Let's Exercise!</h2></div>
          {exerciseMenu.map((exercise, index) => (
            <button key={index} onClick={() => setCurrentScreen(() => renderExercise(exercise))}>
              {exercise.name}
            </button>
          ))}
        </div>
      ) : (
        currentScreen
      )}
    </div>
  );
}

export default App;
