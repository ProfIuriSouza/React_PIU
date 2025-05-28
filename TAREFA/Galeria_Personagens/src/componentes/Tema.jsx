import './Tema.css';
import { useState } from 'react';

export default function Tema({children }) {

    const [theme, setTheme] = useState('light');

<<<<<<< HEAD
=======
    //toggleTheme irá chamar a função setTheme que altera o valor de theme com o valor em prev. prev, por sua vez, tem um retorno condicional, alterando
    //light e dark alternadamente. Perceba que aqui ligth e dark são apenas string. Mas dentro no return de Tema percebemos que essa string é na verdade o nome
    //de uma classe css que existe dentro de Tema.css com as definições de layout para o modo claro ou escuro. 
>>>>>>> 0df69ddedb47506c876f03df45177c73d8fabffe
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
<<<<<<< HEAD
        Alternar Tema ({theme === 'light' ? 'Claro' : 'Escuro'})
      </button>

=======
          {/* mesma lógica de prev está sendo aplicada agora para mudar o nome do botão */}
        Alternar Tema ({theme === 'light' ? 'Claro' : 'Escuro'})
      </button>
{/* aqui em children será inserido o componenete que foi passado. Neste caso, aqui será inserido o componente Galeria */}
>>>>>>> 0df69ddedb47506c876f03df45177c73d8fabffe
            {children}
    
    </div>
  ) 
}