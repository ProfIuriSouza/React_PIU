const AnonymousFunction = () => {
const nome = "Aluno PIU"

const data = {
    age: 35,
    job: "dev",
};

    return(
        <div className="">
            <h2>Bem-Vindo {nome}</h2>
            <p>Sua idade {data.age} e profissão {data.job}</p>
        </div>
    );
}

export default AnonymousFunction;