import './Detalhes.css'

export default function Detalhes({ character }) {
<<<<<<< HEAD
  if (!character) return null;
=======
  if (!character) {
    return null;
  }
>>>>>>> 0df69ddedb47506c876f03df45177c73d8fabffe

  return (
    <div className='detalhes'>
      <h2>Detalhes do Personagem</h2>
        <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>{character.description}</p>
    </div>
  );
}