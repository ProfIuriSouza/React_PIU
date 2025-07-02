import './Listar.css'
import { useState } from 'react'

export default function Listar() {

    const [tarefa, setTarefa] = useState('')
    const [lista, setLista] = useState([])

        const handleSubmit = (e) => {
            e.preventDefault()
            if (!tarefa){
                return
            }

            //tarefa agora passa a ser um objeto. Com isso adiconamos o status e o seu id (função para gerar aleatória)
            const novaTarefa = {
                id: Math.floor(Math.random()*10000),
                texto: tarefa,
                status: false
            }

            setLista([...lista, novaTarefa] )
            setTarefa('')

        }

        //função para alterar o status da tarefa. Aqui optamos por trabalhar com dois estados: concluída ou não.
         const handleToggle = (id) => {
        setLista(lista.map(item => 
            item.id === id ? { ...item, status: !item.status } : item
        ))
        }

        //função mais 'complexa'. Aqui vamo reposicionar a tarefa no array lista de forma incremental.
        const handleMove = (id, direcao) => {

            //o método finIndex retorna o index do elemento que satisfaz alguma condição. Aqui estamos utilizando para
            //retornar o index do elemento que tem o id igual ao que foi passado para a função handleMove.
            //Perceba que aqui o index é diferente do id.
            
            const indice = lista.findIndex(item => item.id === id)

            //condições extraordinárias

            if((indice === 0 && direcao === 'subir') || (indice === lista.length -1 && direcao === 'descer')){
                return;
            }

            const novaLista = [...lista]; //copia da lista original
            //splice modifica array, removendo ou inserindo elemento. Ele retorna o array modificado. Aqui está sendo removido 1 elementos na posição indice.
            //esse elemento removido é a saída de splice em forma de um novo array. A notação [0] é utilizada para indicar o primeiro elemento do array de retorno.
            //Por fim, itemMovido irá armazenar o elemento que precisa ser movido.
            const itemMovido = novaLista.splice(indice, 1)[0]

            //veririca em que sentido deve ser movido o item e faz o incremento ou decremento do seu indice.
            const novoIndice = direcao === 'subir' ? indice -1 : indice +1;

            //reposicionamento do elemento. Na posição novoIndice, remove-se 0 elementos e adiciona itemMovido
            novaLista.splice(novoIndice, 0, itemMovido)

            setLista(novaLista)
        }

        const handleClear = () => {
            setLista([])
        }


    return(
        <div>
            <h2>Lista de Tarefas</h2>

            <form onSubmit={handleSubmit}>

                <label>
                    <input type="text" onChange={(e) => setTarefa(e.target.value)} value={tarefa}/>
                </label>
                

                <input type="submit" value="Adicionar"/>
            </form>

            <button onClick={handleClear}>Reset</button>

            <ul>
               {lista.map((item, index) => 
                <li key={item.id} className={item.status ? 'concluida' : ''}>
                     <div className="controles-ordem">
                            <button 
                                onClick={() => handleMove(item.id, 'subir')} 
                                disabled={index === 0} // Desabilita o botão se for o primeiro item
                                title="Mover para cima"
                            >
                                ↑
                            </button>
                            <button 
                                onClick={() => handleMove(item.id, 'descer')} 
                                disabled={index === lista.length - 1} // Desabilita se for o último
                                title="Mover para baixo"
                            >
                                ↓
                            </button>
                        </div>
                    <span>{item.texto}</span>
                    <button onClick={() => handleToggle(item.id)}>{item.status ? 'Desmarcar' : 'Concluir'}</button>
                </li>
                
               )}
            </ul>
        </div>

    )

}