import React from 'react';
import Header from './Header';
import Browser from './Browser';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function Body() {
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Header />
    },
    {
      path: "/Browser",
      element: <Browser />
    }
  ]);

  return (
    <div className='w-[100vw] h-[100vh]  overflow-hidden'>
      <img
        className='w-[100%] h-[100%] object-cover '
        src="https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_large.jpg"
        alt="Background"
      />
      <div className='absolute inset-0'>
        <RouterProvider router={AppRouter} />
      </div>
    </div>
  );
}

export default Body;
