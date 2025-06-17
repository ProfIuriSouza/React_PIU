import { useState } from 'react'

export default function Clicks(){

    //metodologia de utilizar um única useState
    const [count, setCount] = useState(0)

    //podemos utilizar dois useState, um para incremento e outro para decremento
    const [up, setUp] = useState(0)
    const [down, setDown] = useState(10)
    return(
        <>
        {/* primeira opção. Aqui aplico a regra de mudar a cor do botão */}
            <div>
                <button style={{margin:"20px", border:"2px solid red", backgroundColor: (count > 10)?"red":"yellow"}} onClick={() => setCount((count) => count + 1)}>
                    +
                    <p>count is {count}</p>
                </button>
                
                <button style={{margin:"20px", border:"2px solid red", backgroundColor: (count > 10)?"red":"yellow"}} onClick={() => setCount((count) => count - 1)}>
                    -
                    <p>count is {count}</p>
                </button>
            </div>

        {/* segunda opção. Aqui aplico a regra de mudar o tamanho do botão */}
            <div>
                <button style={{margin:"20px", border:"2px solid black", width:(up>10)?"200px":""}} onClick={() => setUp((up) => up + 1)}>
                    +
                    <p>{up}</p>
                </button>
                
                <button style={{margin:"20px", border:"2px solid black", height:(down<0)?"10px":""}} onClick={() => setDown((down) => down - 1)}>
                    -
                    <p>{down}</p>
                </button>
            </div>

        </>
    )
}