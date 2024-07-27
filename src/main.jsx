import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes.jsx';
import AosAnimation from './AosAnimation/AosAnimation.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AosAnimation>
      <RouterProvider router={router}></RouterProvider>
    </AosAnimation>
  </React.StrictMode>
);
