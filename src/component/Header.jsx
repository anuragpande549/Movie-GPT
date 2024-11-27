import React from 'react';
import Login from './Login';

function Header() {
  return (
    <div className="w-full h-full">
      <div
        id="logo"
        className='absolute w-full z-20 p-2.5 rounded-md bg-gradient-to-b from-black/100 to-black/7'
      >
        <img 
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
          alt="Logo" 
          className="w-[13rem]"
        />
      </div >
      <div className='flex justify-center items-center w-full h-full'>

      <Login/>
      </div>
    </div>
  );
}

export default Header;
