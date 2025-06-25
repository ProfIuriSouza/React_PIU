// Para a renderização de listas será muito utilizado as funções map e filter. Portanto, aconselha-se fazer um breve estudo sobre o funcionamento destas funções.
// A grande vantagem do uso de map e filter é conseguir implementar uma lista sem precisar explicitar <li>'s para cada elemento de um array.

import { dadoslista } from "./dados";

export default function RenderList(){

    return(
        <div style={{ border: '2px solid red', padding: '20px', fontSize: '20px' }}>
            <h2>Renderização de Listas 1</h2>
            <p>Uso da função map para estruturar os items da listas acessando os elementos de um array</p>
            <ul>
                {/* map irá passar por todos os elementos de dadoslista e retornar um novo array chamado item onde cada elemento de item será um li */}
                {dadoslista.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}