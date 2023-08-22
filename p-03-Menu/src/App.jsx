import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './components/Menu';

const App = () => {
  return (
    <div>
      <h1 className='mt-12 mb-12 p-4 text-center text-4xl bg-green-100'>
        Our Menu
      </h1>
      <Menu />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
