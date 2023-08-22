import React from 'react';
import { Outlet } from 'react-router-dom';

const Products = () => {
  return (
    <div className='mt-16 flex flex-col items-center text-4xl'>
      <h1 className='text-red-500 font-bold'>Products Page</h1>
      <Outlet />
    </div>
  );
};

export default Products;
