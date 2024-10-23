// src/components/PinList.js
import React from 'react';
import './PinList.css';

const PinList = ({ pins, onNavigate }) => {
  return (
    <div className="pin-list-container">
      <h2>Saved Pins</h2>
      {pins.length === 0 ? (
        <p>No pins saved.</p>
      ) : (
        <ul className="pin-list">
          {pins.map((pin, index) => (
            <li key={index} className="pin-item">
              <strong>Remark:</strong> {pin.remark}
              <div><strong>Address:</strong> {pin.address}</div>
              <button
                className="navigate-button"
                onClick={() => onNavigate([pin.lat, pin.lng])}
              >
                Navigate
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PinList;
