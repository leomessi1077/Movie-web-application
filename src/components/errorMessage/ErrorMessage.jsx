import React from 'react';
import './style.scss';

const ErrorMessage = ({ message }) => {
  if (!message) return null;
  
  return (
    <div className="errorMessage">
      <div className="errorContent">
        <h2>⚠️ Error Loading Content</h2>
        <p>{message}</p>
        <div className="errorHelp">
          <h3>Quick Fixes:</h3>
          <ul>
            <li>Check if <code>.env</code> file exists in project root</li>
            <li>Verify API token is correct (no quotes around it)</li>
            <li>Restart dev server: Stop (Ctrl+C) and run <code>npm run dev</code></li>
            <li>Check browser console (F12) for detailed errors</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;

