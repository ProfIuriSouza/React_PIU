import './Card.css';

export default function Card({ name, image, onClick }) {
  return (
<<<<<<< HEAD
=======
    //O onClick entre chaves é a função que será executada, esta foi passada via props 
    // (será handleSelectCharacter declarada la em Galeria).
>>>>>>> 0df69ddedb47506c876f03df45177c73d8fabffe
    <div className="card" onClick={onClick}>
        <figure>
            <img src={image} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    </div>
  );
}