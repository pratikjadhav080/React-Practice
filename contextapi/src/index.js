import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { AppContextProvider } from './contexts/AppContext';
import { AuthContextProvider } from './contexts/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
