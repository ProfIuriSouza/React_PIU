<<<<<<< HEAD
import { useState } from 'react';
import Card from './componentes/Card';
import Detalhes from './componentes/Detalhes';
=======

>>>>>>> 0df69ddedb47506c876f03df45177c73d8fabffe
import Tema from './componentes/Tema';
import Galeria from './componentes/Galeria';
import './App.css';

import person1 from './assets/ash.png';
import person2 from './assets/bobesponja.png';
import person3 from './assets/goku.png';
import person4 from './assets/onepiece.png';
import person5 from './assets/visconde.png';
import person6 from './assets/yoda.png';

<<<<<<< HEAD

=======
//array de objetos para armazenar as informações necessárias sobre cada personagem como nome , a sua descrição e o seu arquivo de imagem (todos importados aqui mesmo em App).
>>>>>>> 0df69ddedb47506c876f03df45177c73d8fabffe
const characters = [
  {
    id: 1,
    name: 'ASH',
    description: 'Aventuras em um mundo fantástico.',
    image: person1
  },
  {
    id: 2,
    name: 'Bob Esponja',
    description: 'Herói corajoso do reino digital.',
    image: person2
  },
   {
    id: 3,
    name: 'Goku',
    description: 'Aventuras em um mundo fantástico.',
    image: person3
  },
  {
    id: 4,
    name: 'Luffy',
    description: 'Herói corajoso do reino digital.',
    image: person4
  },
   {
    id: 5,
    name: 'Visconde',
    description: 'Aventuras em um mundo fantástico.',
    image: person5
  },
  {
    id: 6,
    name: 'Yoda',
    description: 'Herói corajoso do reino digital.',
    image: person6
  }

];

export default function App() {
<<<<<<< HEAD
  // const [selectedCharacter, setSelectedCharacter] = useState(null);

  // const handleSelectCharacter = (character) => {
  //   setSelectedCharacter(character);
  // };
=======

>>>>>>> 0df69ddedb47506c876f03df45177c73d8fabffe


  return (
    <Tema>
<<<<<<< HEAD

      <h1>Galeria de Personagens</h1>
      {/* <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {characters.map((char) => (
          <Card
            key={char.id}
            name={char.name}
            image={char.image}
            onClick={() => handleSelectCharacter(char)}
          />
        ))}
      </div> */}
      <Galeria characters={characters}/>

      {/* <Detalhes character={selectedCharacter} /> */}
=======
      <h1>Galeria de Personagens</h1>
      {/* O componente Galeria aqui está sendo passado como children para o componenete Tema. Galeria recebe por props o array de objetos com as informações dos personagens */}
      <Galeria characters={characters}/>
>>>>>>> 0df69ddedb47506c876f03df45177c73d8fabffe
    </Tema>
  );
}