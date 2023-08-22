import React from 'react';

const Button = ({ filter, children }) => {
  return (
    <button
      className='m-2 px-2 py-1 border-2 border-yellow-600 rounded-lg'
      type='button'
      onClick={() => filter(children)}>
      {children}
    </button>
  );
};

export default Button;
