import "./Card.css"

export default function Card(){
    let screen = "https://cdn.pixabay.com/photo/2017/09/11/14/42/rings-2739188_1280.jpg"

    return(
        <div>
            <figure>
                <img src={screen} alt="Imagem abstrata de corrente" />
                <figcaption>Imagem de corrente em tons vermelhos</figcaption>
            </figure>
        </div>
    )
}