import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeContextWrapper from './components/Navbar';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <ThemeContextWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContextWrapper>
);
reportWebVitals();
