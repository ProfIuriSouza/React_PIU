//Renderização condicional
//Opção 1 - Estrutura tradicional de if e else

import Images from "./Images";
import FirstComponent from "./FirstComponent";

function Conditional(){
     let content;
     let isLogged = true;


     if(isLogged){
         content = <Images />
     } else {
         content = <FirstComponent />
     }

     return(
         <>
             {content}
             <button onClick={() => {content = true}}>Mudar Estado</button>
         </>
     )
 }

 export default Conditional

//Opção 2 - Estrutura condicional reduzida

// import Images from "./Images";
// import FirstComponent from "./FirstComponent";

// function Conditional(){
//     let isLogged = false;

//     return(
//         <>

//         {isLogged ? <FirstComponent /> : <Images/>}
         
//         </>
//     )
// }

// export default Conditional


// Opção 3 - Utilizando useState

// import Images from "./Images";
// import FirstComponent from "./FirstComponent";

// import { useState } from "react";

// function Conditional(){
//     let content;
//     let [isLogged, setIsLogged] = useState(false)


//     if(isLogged){
//         content = <Images />
//     } else {
//         content = <FirstComponent />
//     }

//     return(
//         <>
//             {content}
//             <button onClick={() => setIsLogged(!isLogged)}>Mudar Estado</button>
//         </>
//     )
// }

// export default Conditional