
import './App.css'
import RenderList from './componentes/RenderList'
import RenderProps from './componentes/RenderProps'
import { dadoslista2 } from './componentes/dados'
import RenderFilter from './componentes/RenderFilter'

function App() {
 

  return (
    <>
      <RenderList />
      <br />
      <RenderProps dados={dadoslista2}/>
      <br />
      <RenderFilter />

    </>
  )
}

export default App
