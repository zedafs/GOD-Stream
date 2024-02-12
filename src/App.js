// app.js

import React, { useEffect, useState } from 'react';
import './style.css'; // Make sure to import your CSS file

const App = () => {
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    // Your countdown logic goes here
    // You can use the countdown state to display the remaining time
    // Update the countdown state accordingly

    // Example countdown logic:
    const interval = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wrapper">
      <h1 className="floating-text">Zedafz, 26th Batch</h1>
      <div className="typing-container">
        <span className="typing-text"></span>
      </div>

      <div className="counter-container">
        <div id="countdown">{countdown}</div>
      </div>
    </div>
  );
};

export default App;
