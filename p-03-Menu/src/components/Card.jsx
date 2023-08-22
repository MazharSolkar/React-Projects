import React from 'react';

const Card = ({ item }) => {
  return (
    <div className='w-56 border-2 border-slate-500 m-4 p-4 rounded-xl'>
      <h1 className='text-yellow-700 font-bold'>{item.title}</h1>
      <h2 className='text-slate-800'>${item.price}</h2>
      <button className='border-2 border-teal-600 px-2 py-1 rounded-xl text-teal-700'>
        {item.category}
      </button>
      <p className='text-slate-500'>{item.desc}</p>
    </div>
  );
};

export default Card;
