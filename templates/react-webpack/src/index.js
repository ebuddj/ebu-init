import React from 'react';
import ReactDOM from 'react-dom';
import App from './jsx/App.jsx';

const wrapper = document.getElementById('ebu-app-root');
wrapper ? ReactDOM.render(<App />, wrapper) : false;

