import './Dropdown.css'
import {titulo} from './componentes/dados'
import {lista} from './componentes/dados'


export default function Dropdown(){ 

    return(
        <nav>
            <ul>
                <li className='dropdown'>
                    <a href=''>Home</a>
                    <div className='dropdown-menu'>
                        <a href=''>Sobre</a>
                        <a href=''>Contato</a>
                        <a href=''>Equipe</a>
                    </div>
                </li>
                {titulo.map(title =>(
                    <a>{title}</a>
                    )
                )}
            </ul>
        </nav>      
    );
}


