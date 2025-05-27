import './Card.css';

export default function Card({ name, image, onClick }) {
  return (
    //O onClick entre chaves é a função que será executada, esta foi passada via props 
    // (será handleSelectCharacter declarada la em Galeria).
    <div className="card" onClick={onClick}>
        <figure>
            <img src={image} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    </div>
  );
}