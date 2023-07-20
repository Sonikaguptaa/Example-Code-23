import { createContext, useState } from "react"

export const FamilyContext = createContext()

export function FamilyProvider(props) {

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

      const sharedValue = {
        traits,
        changeTraits
      }

    return (
        <FamilyContext.Provider value={sharedValue}>
            {props.children}
        </FamilyContext.Provider>
    )
}