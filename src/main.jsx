import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Hide loading indicator when app is rendered
const hideLoading = () => {
  const loadingElement = document.getElementById('loading');
  if (loadingElement) {
    loadingElement.style.display = 'none';
  }
};

try {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  // Hide loading after render completes
  hideLoading();
} catch (error) {
  console.error('Failed to render application:', error);
  
  // Show error message
  hideLoading();
  const errorElement = document.getElementById('error-message');
  if (errorElement) {
    errorElement.style.display = 'block';
  }
}