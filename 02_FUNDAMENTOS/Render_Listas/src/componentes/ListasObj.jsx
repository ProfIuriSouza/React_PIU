import {obj} from './dados.js'

export default function ListasObj(){

    const selecionados = obj.filter(selecionado => selecionado.idade === 10)

    return(
        <div>
            <ul>
                {selecionados.map(selecionado => (
                    <li style={{fontSize: '36px'}} key={selecionado.id}>
                        <p>O nome selecionado foi {selecionado.nome}, sua idade é {selecionado.idade}. Seu id é {selecionado.id}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}