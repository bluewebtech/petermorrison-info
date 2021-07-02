import React from 'react';
import ReactDOM from 'react-dom';
import { LocalStorage } from 'utilities';
import SettingsConfig from 'config/settings';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/scss/main.scss';

if (!LocalStorage.has('settings')) {
  LocalStorage.set('settings', SettingsConfig);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// @ts-ignore
reportWebVitals();
