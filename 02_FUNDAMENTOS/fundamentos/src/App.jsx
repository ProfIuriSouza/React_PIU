
import FirstComponent from "./components/FirstComponent"
import TemplateExpression from "./components/TemplateExpressions"
import AnonymousFunction from "./components/AnonymousFunction"
import './App.css'
import Events from "./components/Events"
import Images from "./components/Images"
import ChangeBackground from "./components/ChangeBackground"
import ChangeValue from "./components/ChangeValue"

function App() {

  return (
    <>
      <FirstComponent/>
      <FirstComponent/>
      <FirstComponent/>
      <TemplateExpression />
      <AnonymousFunction />
      <Events />
      <Images/>
      <ChangeBackground/>
      <ChangeValue />
    </>
  )
}

export default App
