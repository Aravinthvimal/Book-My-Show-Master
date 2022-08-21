// React
import React from 'react';
import ReactDOM from 'react-dom';

// Route
import { BrowserRouter } from "react-router-dom";

// Stylesheet
import './index.css';

// Index
import App from './App';

//Not sure yet
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


