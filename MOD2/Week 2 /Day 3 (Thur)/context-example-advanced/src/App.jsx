import { useContext } from 'react'
import { FamilyContext } from './familyContext'

import './App.css'
import Parent from './components/Parent'

function App() {

  const { traits, changeTraits } = useContext(FamilyContext)

  return (
    <div>
      <button onClick={changeTraits}>Change</button><br/><br/>
     <span style={traits}>App</span><br />|
        <Parent />
    </div>
  )
}

export default App
