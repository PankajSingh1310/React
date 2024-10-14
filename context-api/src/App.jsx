import Text from './components/Text'
import './App.css'
import Button from './components/Button'
import GloabalState from './context'

function App() {

  return (
    <>
      <GloabalState>
        <Text />
        <Button />
      </GloabalState>
    </>
  )
}

export default App
