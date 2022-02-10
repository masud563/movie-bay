import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-slate-100 h-20 pt-10 pl-24'>
      <nav className='flex items-center'>
        <div>
          <Link to='/'>
          <h1 className='text-2xl font-bold mr-12'>Movie Bay</h1>
          </Link>
        </div>
        <ul className='flex'>
          <li className='mr-6'>
            <NavLink to='/movie'>Movies</NavLink>
          </li>
          <li className='mr-6'>
            <NavLink to='/customers'>Customers</NavLink>
          </li>
          <li className='mr-6'>
            <NavLink to='/rentals'>Rentals</NavLink>
          </li>
          <li className='mr-6'>
            <NavLink to='/login'>Login</NavLink>
          </li>
          <li className='mr-6'>
            <NavLink to='/register'>Register</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;