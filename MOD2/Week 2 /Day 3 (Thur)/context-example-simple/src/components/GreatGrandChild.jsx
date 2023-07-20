import { FamilyContext } from "../App";
import { useContext } from "react"

function GreatGrandChild() {

    const traits = useContext(FamilyContext)

    return ( 
        <div>
            <span style={traits}>GreatGrandChild</span> <br />
        </div>
     );
}

export default GreatGrandChild;