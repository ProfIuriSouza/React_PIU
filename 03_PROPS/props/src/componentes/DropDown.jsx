import './Dropdown.css'


    export default function Dropdown(props){ 
    

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
                <li className='dropdown'>
                    <a href=''>{props.titulo[0]}</a>
                            <div className='dropdown-menu'>
                                {Ordem(props.lista)}
                            </div>
                    
                </li>
                {/* cada chamada a função Estrutura irá criar uma nova lista <ul> */}
               {Estrutura(props.titulo[1], props.lista)}
               {Estrutura(props.titulo[2], props.lista)}
               {Estrutura(props.titulo[3], props.lista)}
               {Estrutura(props.titulo[4], props.lista)}
            </ul>
            
                
        </nav>
               
    );

   
}


function Ordem (lista){
    let retorno = [];
    for (let i=0; i<lista.length; i++){
        {retorno.push(<a>{lista[i]}</a>)}
    }

    return (
        <>
        {retorno}
        </>
        );
    }


function Estrutura(titulo, lista){

    return(
        <>
        <li className='dropdown'>
        <a href=''>{titulo}</a>
            <div className='dropdown-menu'>
                {Ordem(lista)}
            </div>
        </li>
        </>
    );
}
