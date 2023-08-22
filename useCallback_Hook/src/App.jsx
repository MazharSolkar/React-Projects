import React from 'react';
import ReactDOM from 'react-dom/client';
import ParentComponent from './ParentComponent';

const App = () => {
  return (
    <div>
      <ParentComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
