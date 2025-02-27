import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('dark');
  
  useEffect(() => {
    // Set the data-theme attribute on the document element
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  
  return (
    <div className="flex gap-2">
      <button 
        onClick={() => setTheme('dark')}
        className="px-4 py-2 rounded bg-main1 text-neutral0"
      >
        Dark
      </button>
      <button 
        onClick={() => setTheme('light')}
        className="px-4 py-2 rounded bg-main1 text-neutral0"
      >
        Light
      </button>
    </div>
  );
}