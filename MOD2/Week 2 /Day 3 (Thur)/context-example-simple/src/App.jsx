import { useState, createContext } from 'react'
import './App.css'
import Parent from './components/Parent'

export const FamilyContext = createContext()

function App() {

  const [traits, setTraits] = useState({
    color: 'white',
    backgroundColor: 'blue'
  })

  function changeTraits() {
    let newTraits = {
      color: traits.color === 'white' ? 'black' : 'white',
      backgroundColor: traits.backgroundColor === 'blue' ? 'red' : 'blue'
    }
    setTraits(newTraits)
  }

  return (
    <div>
      <button onClick={changeTraits}>Change</button><br/><br/>
     <span style={traits}>App</span><br />|
      <FamilyContext.Provider value={traits}>
        <Parent traits={traits} />
      </FamilyContext.Provider>
    </div>
  )
}

export default App
