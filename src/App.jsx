import React from 'react';
import Body from './component/Body';
import { Provider } from 'react-redux';
import appStore from './utils/AppStore';
import { createBrowserRouter, } from 'react-router-dom';
import Header from "./component/Header"
import Browser from "./component/Browser"
import { RouterProvider } from 'react-router-dom';

const AppRouter = createBrowserRouter([

  {
    path : "/",
    element : <Body/>,
    children: [
      
      {
        path: "/",
        element: <Header />,
      },
      {
        path: "/Browser",
        element: (
            <Browser />
    
        ),
      },
    
  ]}

]);

function App() {
  
  return (
    <>
      <Provider store={appStore}>
      <RouterProvider router={AppRouter}/>
      </Provider>
    </>
  );
}

export default App;
