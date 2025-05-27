
import Tema from './componentes/Tema';
import Galeria from './componentes/Galeria';
import './App.css';

import person1 from './assets/ash.png';
import person2 from './assets/bobesponja.png';
import person3 from './assets/goku.png';
import person4 from './assets/onepiece.png';
import person5 from './assets/visconde.png';
import person6 from './assets/yoda.png';

//array de objetos para armazenar as informações necessárias sobre cada personagem como nome , a sua descrição e o seu arquivo de imagem (todos importados aqui mesmo em App).
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



  return (
    <Tema>
      <h1>Galeria de Personagens</h1>
      {/* O componente Galeria aqui está sendo passado como children para o componenete Tema. Galeria recebe por props o array de objetos com as informações dos personagens */}
      <Galeria characters={characters}/>
    </Tema>
  );
}