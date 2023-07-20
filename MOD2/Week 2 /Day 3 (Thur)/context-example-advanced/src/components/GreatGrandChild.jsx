import { useContext } from "react";
import { FamilyContext } from "../familyContext";

function GreatGrandChild() {

    const { traits } = useContext(FamilyContext)

    return ( 
        <div>
            <span style={traits}>GreatGrandChild</span> <br />
        </div>
     );
}

export default GreatGrandChild;