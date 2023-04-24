import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { UserDetails } from './context/UserContext';
import { ModalProvider } from './context/ModalContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserDetails>
      <ModalProvider>
        <App />
      </ModalProvider>
    </UserDetails>
  </React.StrictMode>,
);
