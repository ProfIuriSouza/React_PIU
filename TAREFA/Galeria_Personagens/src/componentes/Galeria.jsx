import Card from "./Card"
import Detalhes from "./Detalhes"
import { useState } from 'react';
import './Galeria.css'

export default function Galeria({characters}){

    //useState sem inicialização para após a renderização da página nenhum personagem está selecionado.
const [selectedCharacter, setSelectedCharacter] = useState(null);
    
const handleSelectCharacter = (character) => {
    setSelectedCharacter(character);
    };

    return(
        <div className="galeria">
            {/* a função map mapeia todo o array characters, que foi passado via props, em um novo array chamado char. Para cada elemento de char é chamado o
            componenete Card com os devidos parâmetros enviados por meio de props */}
            {characters.map((char) => (
                  <Card
                    key={char.id}
                    name={char.name}
                    image={char.image}
                    //quando o card for clicado, a função handleSelectCharacter será chamado com o parametro char sendo passado a função.
                    onClick={() => handleSelectCharacter(char)}
                    
                  />
                ))}
                {/* Componente detalhes recebe via props o objeto - valor de char - que corresponde ao card clicado */}
            <Detalhes character={selectedCharacter} />
        </div>
    )
}