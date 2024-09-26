import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Auth0Provider} from '@auth0/auth0-react'


  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <Auth0Provider
        domain="baristastudios.us.auth0.com"
        clientId="BVbOagvmJ8dItqvImjG40OduKOjv6DKP"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
    </Auth0Provider>
  
);
reportWebVitals();
