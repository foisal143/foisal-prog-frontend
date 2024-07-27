import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes.jsx';
import AosAnimation from './AosAnimation/AosAnimation.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AosAnimation>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </AosAnimation>
  </React.StrictMode>
);
