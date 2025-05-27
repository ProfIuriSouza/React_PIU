import './Detalhes.css'

export default function Detalhes({ character }) {
  if (!character) {
    return null;
  }

  return (
    <div className='detalhes'>
      <h2>Detalhes do Personagem</h2>
        <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>{character.description}</p>
    </div>
  );
}