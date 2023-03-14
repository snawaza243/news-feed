import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeContextWrapper from './components/Navbar';
import CountryNameCode from './pages/CountryNameCode';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App />
 <ThemeContextWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContextWrapper>
);
reportWebVitals();
