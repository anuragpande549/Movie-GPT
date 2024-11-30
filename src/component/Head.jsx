import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

function Head() {
  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Successfully logged out.");
      })
      .catch((error) => {
        console.error("Failed to log out", error);
      });
  };

  return (
    <div className='w-full h-[4rem] flex items-center justify-between px-8 bg-black'>
      <div id="logo" className='flex items-center'>
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
          className="w-[100px]"
        />
      </div>
      <div className='flex items-center space-x-4 text-white'>
        <Link to="/" className='hover:underline'>Home</Link>
        <Link to="/series" className='hover:underline'>Series</Link>
        <Link to="/movies" className='hover:underline'>Movies</Link>
        <Link to="/my-list" className='hover:underline'>My List</Link>
        <div className='relative group'>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="User Avatar"
            className="w-[30px] h-[30px] rounded-full cursor-pointer"
          />
          <div className='absolute right-0 mt-2 w-48 bg-black rounded-md shadow-lg'>
            <Link to="/profile" className='block px-4 py-2 hover:bg-gray-800'>Profile</Link>
            <Link to="/settings" className='block px-4 py-2 hover:bg-gray-800'>Settings</Link>
            <button onClick={handleLogOut} className='block w-full px-4 py-2 text-left hover:bg-gray-800'>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Head;
