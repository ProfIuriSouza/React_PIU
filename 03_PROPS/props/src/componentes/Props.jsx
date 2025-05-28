export default function Props (props){

    return(
        <>
            <div>
                <h2>Teste props</h2>
                <p>O nome {props.nome} foi enviado via props</p>
                <p>{props.newname}</p>
                <p>{props.atributo}</p>
                <p>{props.name}</p>
                <img src={props.imagem} alt="" />
            </div>
        </>
    )
}