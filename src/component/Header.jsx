import React, { useEffect } from 'react';
import Login from './Login';



function Header() {


  return (
    <div className='w-[100vw] h-[100vh]  overflow-hidden'>
    <img
      className='w-[100%] h-[100%] object-cover '
      src="https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_large.jpg"
      alt="Background"
    />
    <div className="w-full absolute top-0 h-full">
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
    </div>
  );
}

export default Header;
