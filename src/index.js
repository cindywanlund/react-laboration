import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './components/MyApp';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <MyApp />
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);