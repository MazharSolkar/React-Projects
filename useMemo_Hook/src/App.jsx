import ReactDOM from 'react-dom/client';
import React, { useState, useMemo } from 'react';

const App = () => {
  const [counterOne, setCounteroOne] = useState(0);
  const [counterTwo, setCounteroTwo] = useState(0);

  const incrementOne = () => {
    setCounteroOne(counterOne + 1);
  };
  const incrementTwo = () => {
    setCounteroTwo(counterTwo + 1);
  };

  // useMemo will return cached value if the dependecy value is not changed, else it will recompute
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
