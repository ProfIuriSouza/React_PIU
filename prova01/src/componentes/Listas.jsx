import { carros } from "./dados_carro";

export default function Listas(){

    const listas = carros.filter(carro => carro.cor === "vermelho")
    return(

        <>
            <ul style={{backgroundColor:"aqua"}}>
                {carros.map(carro => (
                    <li>
                        <p>{carro.modelo} {carro.cor}</p>
                    </li>
                ))}
            </ul>

            <ul style={{backgroundColor:"grey"}}>
                {listas.map(lista => (
                    <li>
                        <p>O modelo {lista.modelo} é da cor {lista.cor} </p>
                    </li>
                ))}
            </ul>
        </>
    )
}