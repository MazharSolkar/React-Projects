import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <section className='bg-violet-100'>
      <div className={`flex justify-around `}>
        <NavLink to='/home'>
          {({ isActive }) => (
            <h1
              className={`${
                isActive ? 'bg-green-500 font-bold' : ''
              } py-0.5 px-2`}>
              Home
            </h1>
          )}
        </NavLink>
        <NavLink to='/products'>
          {({ isActive }) => (
            <h1
              className={`${
                isActive ? 'bg-green-500 font-bold' : ''
              } py-0.5 px-2`}>
              Products
            </h1>
          )}
        </NavLink>
      </div>
    </section>
  );
};

export default Navbar;
