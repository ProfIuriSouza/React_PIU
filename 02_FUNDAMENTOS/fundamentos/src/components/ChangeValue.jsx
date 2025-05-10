/* Utilizando usestate e percebendo a sua diferença para uma variável convencional.
Utilizamos o useState para gerenciar o valor de um dado. A sua diferença para uma variável é que a variável não irá
re-renderizar (atualizar) o componente. No exemplo abaixo vamos criar um botão que quando clicado atualizado o valor de um dados.
Inicialmente vamos manipular o dado através de uma variável e depois por meio de useState. Percebam a diferença.
*/

//Hooks devem ser importados
import { useState } from "react"

function ChangeValue (){
    let valor = 1

    let [valor2, setValor2] = useState(1)

    return(
        <>
            <div>
                <button onClick={() => {valor+1}}>Valor1: {valor}</button>
            </div>
            <br />
            <div>
                <button onClick={() => setValor2(valor2+1)}>Valor2: {valor2}</button>
            </div>
        </>
    )

}

export default ChangeValue