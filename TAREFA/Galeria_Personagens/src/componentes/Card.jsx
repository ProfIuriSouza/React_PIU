import './Card.css';

export default function Card({ name, image, onClick }) {
  return (
    <div className="card" onClick={onClick}>
        <figure>
            <img src={image} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    </div>
  );
}