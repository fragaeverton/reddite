import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let initialState = {
  counter:0,
}

function counterReducer(state = initialState, action){

};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
