// src/App.js
import React, { useState, useEffect } from 'react';
import MapComponent from './components/MapComponent';
import PinList from './components/PinList';
import './App.css';

const App = () => {
  const [pins, setPins] = useState([]);

  useEffect(() => {
    const savedPins = JSON.parse(localStorage.getItem('pins')) || [];
    setPins(savedPins);
  }, []);

  const addPin = (pin) => {
    const newPins = [...pins, pin];
    setPins(newPins);
    localStorage.setItem('pins', JSON.stringify(newPins));
  };

  const navigateToPin = (position) => {
    alert(`Navigating to: ${position}`);
  };

  return (
    <div className="app-container">
      <PinList pins={pins} onNavigate={navigateToPin} />
      <MapComponent onAddPin={addPin} />
    </div>
  );
};

export default App;
