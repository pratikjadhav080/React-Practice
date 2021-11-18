import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { AppContextProvider } from './contexts/AppContext';
import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeContextProvider } from './contexts/ThemeContext.jsx';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <AuthContextProvider>
        <AppContextProvider>
          <App/>
        </AppContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
