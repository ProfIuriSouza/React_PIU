import { useState, useEffect } from "react";

export default function DateReceiver () {

    const [usuario, setUsuarios] = useState([]);
    const [id, setId] = useState('')

      useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
        const data = await response.json(); 
        setUsuarios(data); 
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
    }
}

    fetchUsuarios();
  }, [id])

  const datafilter = usuario.filter(dados => dados.id == id)


    return(
        <div>
            <div>
                <h3>Dados do usuário ID = {id}</h3>
                <label>
                    <input type="number" min={1} max={10} name="ID user" value={id} onChange={(e) => setId(e.target.value)}/>
                </label>

                <ul>
                    {datafilter.map(user => (
                    <li key={user.id} style={{listStyle: 'none'}}>
                    Nome: {user.name} {user.username} <br/>
                    Email: {user.email} <br/>
                    Endereço: {user.address.street}
                    {user.address.suite} <br/>
                    Cidade: {user.address.city} <br/>
                    CEP: {user.address.zipcode} <br/>
                    Localização: {user.address.geo.lat} ; {user.address.geo.lng}</li>
                    ))}
                </ul>
                
            </div>
        </div>
    )
}