import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource-variable/bricolage-grotesque';
import '@fontsource-variable/public-sans';
import './index.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { BookmarkProvider } from './context/BookmarkContext';
import { RegistrationProvider } from './context/RegistrationContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ThemeProvider>
        <BookmarkProvider>
          <RegistrationProvider>
            <App />
          </RegistrationProvider>
        </BookmarkProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
