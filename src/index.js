import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavbarS from './Components/navbar/navbar';
import Contactlist from './Components/contactstable/contactstable';
import Addnewcontact from './Components/addcontact/addcontact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarS />
    <Contactlist />
    <Addnewcontact />
    <App />
  </React.StrictMode>
);

