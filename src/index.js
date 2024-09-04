import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StyledEngineProvider } from '@mui/material';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from "./routes/index"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
        {/* <CssBaseline /> */}
          <RouterProvider router={router} />
    </StyledEngineProvider>
  </React.StrictMode>
);
reportWebVitals();
