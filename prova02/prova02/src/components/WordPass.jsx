import { useState, useEffect } from "react";

export default function WordPass (){

  const [nome, setNome] = useState('')
  const [wordpass, setWordPass] = useState('')
  const [background, setBackground] = useState('#FFF0F5')

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setBackground(wordpass === 'AlunoIFRN' ? '#6495ED' : '#FAEBD7'); 
  }


//   useEffect(() =>{
//     document.body.style.background = background;

//   }, [background])

  return (
    <div style={{ backgroundColor: background, width: '300px', height: '300px'}}>
        <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <div style={{padding: '20px'}}>
                    <label>Nome:</label>
                        <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Login"
                        />
                </div>

                <div style={{padding: '20px'}}>
                <label>Palavra-Passe:</label>
                <input
                    type="text"
                    value={wordpass}
                    onChange={(e) => setWordPass(e.target.value)}
                    placeholder="Palavra-Passe"
                />
                </div>

                <button type="submit" style={{padding: '20px'}}>
                Enviar
                </button>
            </form>

        <p>
          Olá, <strong>{nome}</strong>! O fundo agora está na cor <strong>{background}</strong>.
        </p>
      
    </div>
  );

}