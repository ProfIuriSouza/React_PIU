import { useState } from 'react';

export default function Tarefas() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]); //inicializa um array vazio

  const handleChange = (e) => {
    setTarefa(e.target.value); //insere o valor digitado no input na variável de estado tarefa
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //trava a submissão para não perder os dados
    if (tarefa.trim() !== '') { //trim vai eliminar os espaços e verifica se a string não é vazia, o que não seria válido.
      setTarefas([...tarefas, tarefa]); //função spread: vai adicionar tarefa na string tarefas em formato de fila
      setTarefa(''); //reseta o valor do estado tarefa
    }
  };

  const handleLimpar = () => {
    setTarefas([]); //reseta o array de tarefas
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={handleSubmit}>
        <label>
            <input 
            type="text" 
            value={tarefa} 
            onChange={handleChange}
            placeholder="Digite uma tarefa"
            />
        </label>
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tarefas.map((item, index) => (
          <li key={index}>{item}</li> //item e index são parâmetros próprios do map
        ))}
      </ul>

      <button onClick={handleLimpar}>Limpar tudo</button>
    </div>
  );
}
