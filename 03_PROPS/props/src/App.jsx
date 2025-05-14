import Props from './componentes/Props'
import Card from './componentes/Card'
import Children from './componentes/Children'
import './App.css'

function App() {


  return (
    <>
      <Props nome={"React PIU"}/>
      <Card />
      <br />
      <Children>
        <Card/>
      </Children>
    </>
  )
}

export default App
