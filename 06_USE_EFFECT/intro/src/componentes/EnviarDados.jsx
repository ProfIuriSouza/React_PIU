import { useEffect } from "react";


export default function EnviarDados(){

    let API = ""

    useEffect(() => {
  const enviarDados = async () => {
    const novoPost = {
      id: 1,
      title: "Conteúdo do novo post"
    };

    try {
      const response = await fetch({API}, { //aqui deve ser inserido o endereço da API
        method: 'POST', // método POST para envio de dados
        headers: {
          'Content-Type': 'application/json' // informa que os dados estão em JSON
        },
        body: JSON.stringify(novoPost) // converte o objeto JS em JSON
      });

      const data = await response.json();
      console.log("Resposta da API:", data);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  enviarDados();
}, []);

    return(
        <div>
            <p>envio de dados</p>
        </div>

    )
}