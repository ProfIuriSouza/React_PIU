import './Tema.css';
import { useState } from 'react';

export default function Tema({children }) {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

//   const style = {
//     backgroundColor: theme === 'dark' ? '#1e1e1e' : '#f9f9f9',
//     color: theme === 'dark' ? '#f9f9f9' : '#1e1e1e',
//     minHeight: '100vh',
//     padding: '20px',
//     transition: 'all 0.3s ease'
//   };



  return (
    <div className={theme}>
        <button onClick={toggleTheme}>
        Alternar Tema ({theme === 'light' ? 'Claro' : 'Escuro'})
      </button>

            {children}
    
    </div>
  ) 
}