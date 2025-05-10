//Trabalhando com duas formas de importação de imagens. Usando a pasta public (opcão 1) e a pasta assets e src (opção 2-  mais usual)

//para imagens em assets deve-se importar como se fosse um componente. Esta forma vai se mostrar mais prática.
//Obs: Cuidado com o nome a ser dado para as variáveis. Não deve ser utilizado nomes reservados.
import imagem from "../assets/nature.jpg"

function Images (){

    return(
        <>
        {/* opção 1 - imporante de public, podemos referencias como se estivesse em src. 
        Obs.: Tag figure permite usar a opçaõ de legenda figcaption */}
        <figure>
            <img src="./bridge.jpg" alt="Imagem de Ponte" />
            <figcaption>Imagem de uma ponte</figcaption>
        </figure>
        <figure>
            <img src={imagem} alt="Imagem de natureza" />
            <figcaption>Imagem da Natureza</figcaption>
        </figure>
        </>

    )
}

export default Images