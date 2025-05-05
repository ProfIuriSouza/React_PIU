

export default function TemplateExpression(){

    return(
        <div className="template">
            {/*o que for colocado entre {} será interpretado como JS. Resultado de operações
            serão exibidos como string*/}
            <h2>Somando 2 + 2 = {2 + 2}</h2>
        </div>
    );
}