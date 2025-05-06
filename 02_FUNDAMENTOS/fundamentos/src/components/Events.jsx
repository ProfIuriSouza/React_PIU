function Events (){

    const handleClick = () => {
        console.log("clique por função");
    }

    return(
        <div>
            <div>
                <button onClick={() => console.log("Você clicou")}>Clique Aqui</button>
                <div onClick={() => alert("Você clicou")}>Clique</div>
            </div>
            <div>
                {/* Na chamada da função não pode inicializar com (), dessa forma a função será disparada no
                carregamento da página*/}
                <button onClick={handleClick}>Outro Clique</button>
            </div>
        </div>
    );
}

export default Events