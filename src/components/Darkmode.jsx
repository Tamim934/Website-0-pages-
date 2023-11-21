import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const darkModeColor = '#272727'; 
  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = darkModeColor;
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }, [darkMode]);

  return (
    <div>
      <button type="button" onClick={() => setDarkMode(!darkMode)} style={{ fontSize: '2em' }}>
        {darkMode ? '🌙' : '☀️'}
      </button>
    </div>
  );
};

export default DarkModeToggle;