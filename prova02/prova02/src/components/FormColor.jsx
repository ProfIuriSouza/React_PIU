import { useState } from "react";

export default function FormColor (){

  const [nome, setNome] = useState('')
  const [cor, setCor] = useState('')
  const [background, setBackground] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setBackground(cor); 
    //document.body.style.background = cor;
  }

  return (
    <div style={{ backgroundColor: background, width: '300px', height: '300px'}}>
      <form onSubmit={handleSubmit}>
        <div style={{padding: '20px'}}>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
          />
        </div>

        <div style={{padding: '20px'}}>
          <label>Cor:</label>
          <input
            type="text"
            value={cor}
            onChange={(e) => setCor(e.target.value)}
            placeholder="Ex: red, blue"
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