import React from 'react';

const Button = (props) => {
  return (
    <button
      className='bg-indigo-600 hover:bg-indigo-400  text-white font-[Poppins] py-2 px-6 rounded md:ml-8 
    duration-500'>
      {props.children}
    </button>
  );
};

export default Button;
