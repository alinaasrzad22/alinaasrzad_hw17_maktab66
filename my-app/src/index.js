import * as ReactDOMClient from "react-dom/client";

// import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';

//React 18
const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(
 <React.StrictMode>
   <App/>
 </React.StrictMode> 
);