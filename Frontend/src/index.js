import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react"
import { store } from "./Redux/store"
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import Theme from './Theme';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider 
    domain="dev-xp6elj2fq0osptnk.us.auth0.com"
    clientId="eHZlF0Z0ooiert0gB4bMSSlh9OCXblH8"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <Provider store={store}>
    <ChakraProvider theme={Theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </Provider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
