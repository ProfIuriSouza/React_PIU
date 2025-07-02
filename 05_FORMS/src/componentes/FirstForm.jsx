import './FirsForm.css'

export default function FirstForm(){
    
    return(
        <div>
                
            {/* formulário simples para inicialização. Detalhe para o htmlFor == for do html. Envolver os inputs em div pode ser uma boa prática */}
            
            <form>
                <div>

                    {/* o atributo htmlFor indica pra qual input a label se destina. Uma prática comum no react é envolver
                    o input pela tag label. Isso 'informa' ao html qual o input daquele label */}

                    <label htmlFor="name">Nome</label>
                    <input type="text" name='name' placeholder='Digite seu nome' />

                </div>

                {/* label envolvendo input */}

                <div>

                    <label>
                        Email:
                        <input type="text" placeholder='Digite seu email' />
                    </label>
                    
                </div>
                    <input type="submit" value="Enviar"/>
            </form>
        </div>
    )

}