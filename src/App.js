
import React ,{ useState, useEffect } from 'react';
import '../App.css';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const numbers = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const secondsStyle = {
    transform: `rotate(${time.getSeconds() * 6}deg)`
  };

  const minutesStyle = {
    transform: `rotate(${time.getMinutes() * 6}deg)`
  };

  const hoursStyle = {
    transform: `rotate(${(time.getHours() % 12) * 30 + (time.getMinutes() / 2)}deg)`
  };

  return (
    <div className="analog-clock-container">
      <div className="analog-clock">
        <div className="analog-clock-face">
          <div className="analog-clock-seconds" style={secondsStyle} />
          <div className="analog-clock-minutes" style={minutesStyle} />
          <div className="analog-clock-hours" style={hoursStyle} />
        </div>
        {numbers.map((number, index) => (
          <div
            className={`analog-clock-number analog-clock-number-${index}`}
            key={number}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
