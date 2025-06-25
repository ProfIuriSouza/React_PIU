import './Tema.css';
import { useState } from 'react';

export default function Tema({children }) {

    const [theme, setTheme] = useState('light');

    //toggleTheme irá chamar a função setTheme que altera o valor de theme com o valor em prev. prev, por sua vez, tem um retorno condicional, alterando
    //light e dark alternadamente. Perceba que aqui ligth e dark são apenas string. Mas dentro no return de Tema percebemos que essa string é na verdade o nome
    //de uma classe css que existe dentro de Tema.css com as definições de layout para o modo claro ou escuro. 
    const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };


  return (
    <div className={theme}>
        <button onClick={toggleTheme}>
        Alternar Tema ({theme === 'light' ? 'Claro' : 'Escuro'})
      </button>
{/* aqui em children será inserido o componenete que foi passado. Neste caso, aqui será inserido o componente Galeria */}
            {children}
    </div>
  ) 
}