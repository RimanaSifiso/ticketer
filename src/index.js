import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TicketContext } from './Context';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TicketContext>
    
    <App />
    </TicketContext>
  </React.StrictMode>
);


