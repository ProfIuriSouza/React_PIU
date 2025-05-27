import Props from './componentes/Props'
import Card from './componentes/Card'
import Children from './componentes/Children'
import './App.css'
import Texto from './componentes/Texto'
import foto from './assets/nature.jpg'

function App() {
let aluno = "ana"

  return (
    <>
      {/* <Props nome={aluno} newname={"testetestetdddfs"} atributo={"aluno"}/>
      <Props nome={"peofessort"}/>
      <Props name={"name"} imagem={foto}/> */}
      <Card />
      <br />
      <Card />
      <br/>
      <Children>
        <Card/>
      </Children>
      <br />
      <Children>
        <Texto/>
        <Card />
      </Children>
    </>
  )
}

export default App
