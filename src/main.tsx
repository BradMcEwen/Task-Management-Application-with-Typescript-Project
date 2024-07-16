import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-s3nfaa3aw23mklqp.us.auth0.com"
      clientId='DktL1Uh40KBPozSUtyez6DWEGhQ6vke8'
      authorizationParams={{ redirectUri: window.location.origin }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
