import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../assets/img/logo.svg'

const Header = () => {
  return(
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
         <img src={Logo} alt=''/>
        </Link>
        <div className='flex items-center gap-6'>
        <Link to=''>Signin</Link>
        <Link className='bg-violet-700 text-white rounded-lg px-4 py-3' to=''>Sign up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
