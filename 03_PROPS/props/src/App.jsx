import Props from './componentes/Props'
import Card from './componentes/Card'
import Children from './componentes/Children'
import './App.css'
import Texto from './componentes/Texto'
import foto from './assets/nature.jpg'
import Dropdown from './componentes/DropDown'

function App() {
//let aluno = "ana"

const menus=['Link1','Link2','Link3','Link4', 'Link5'];
const nomes=['Menu1','Menu2','Menu3','Menu4', 'Menu5'];

  return (
    <>
      {/* <Props nome={aluno} newname={"testetestetdddfs"} atributo={"aluno"}/>
      <Props nome={"peofessort"}/>
      <Props name={"name"} imagem={foto}/>
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
      </Children> */}

        <Dropdown titulo={nomes} lista={menus}/>

    </>
  )
}

export default App
