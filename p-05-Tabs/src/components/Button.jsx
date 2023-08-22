import React from 'react';

const Button = ({ index, currentItem, setCurrentItem, children }) => {
  return (
    <button
      className='py-0.5 px-2 m-2 border-b-2 border-b-slate-400'
      onClick={() => setCurrentItem(index)}>
      {children}
    </button>
  );
};

export default Button;
