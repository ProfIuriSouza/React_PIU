import Card from "./Card"
import Detalhes from "./Detalhes"
import { useState } from 'react';
import './Galeria.css'

export default function Galeria({characters}){

const [selectedCharacter, setSelectedCharacter] = useState(null);
    
const handleSelectCharacter = (character) => {
    setSelectedCharacter(character);
    };

    return(
        <div className="galeria">
            {characters.map((char) => (
                  <Card
                    key={char.id}
                    name={char.name}
                    image={char.image}
                    onClick={() => handleSelectCharacter(char)}
                  />
                ))}
            <Detalhes character={selectedCharacter} />
        </div>
    )
}