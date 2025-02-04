// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';  
import App from './App';
import App1 from './App1';
import App3 from './app3';
import Footer from './footer'; // Ensure Footer is correctly imported

import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <div className="container">
      <div className="row">
        <App />
        <App1 />
      </div>
      <div className="row">
        <App3 />
      </div>
      <Footer /> {/* Footer component */}
    </div>
  </Provider>
);
