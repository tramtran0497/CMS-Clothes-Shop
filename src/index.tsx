import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GloBalStyle from "./Styles/global";

ReactDOM.render(
  <React.StrictMode>
    <GloBalStyle/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

