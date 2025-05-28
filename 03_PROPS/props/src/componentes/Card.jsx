import "./Card.css"
import screen from '../assets/nature.jpg'

export default function Card(){


    return(
        <div>
            <figure>
                <img src={screen} alt="Imagem abstrata de corrente" />
                <figcaption>Imagem de corrente em tons vermelhos</figcaption>
            </figure>
        </div>
    )
}