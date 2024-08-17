import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import { HashRouter } from 'react-router-dom'

// npm install @auth0/auth0-react    ->para autenticación

const domain = "dev-mz15i1uziaov48ew.us.auth0.com"
const clientId = "r64wLTVShDb3Bvqa32Pr3W869jpHjhu1"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}

      >
        <App />
      </Auth0Provider>
    </HashRouter>
  </React.StrictMode>,
)


// <React.StrictMode>
// <Provider store={store}>
//   <Auth0Provider domain={domain} 
//   clientId={clientId} 
//   redirectUri={window.location.origin}
//   >
//     <HashRouter>
//       <App />
//     </HashRouter>
//   </Auth0Provider>
// </Provider>
// </React.StrictMode>,
