//criando primeiro componente

function FirstComponent (){ //declaração da função com nome em CamelCase
//definição de parâmetros da função: variavei e/ou função por exemplo.
    return(
        //cada componenete deve ter apenas um elemento pai!
        <div className="first">
            <h1>Fundamentos Componentes</h1>
            <h2>Entendendo os primeros componentes</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nostrum.</p>
        </div>
    );
}

{/*para o componente ser utilzado é precido ser exportado! Deve-se ter ao menos um default
    mas é possível ter outros exports - sem ser default.
    */}
export default FirstComponent;