import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from
'react-router-dom';
import {Loginpage} from './pages/loginpage';

const router = createBrowserRouter([
  {
    path:'/',
    Element: <div>Home</div>
  },
  {
    path:'/loginpage',
    Element:<Loginpage />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};