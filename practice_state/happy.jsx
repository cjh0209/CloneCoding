import { useState } from "react";

function Happy() {
    const [name, setname] = useState("HAPPY");

    function change(){
        const newName = name === "HAPPY" ? "SAD" : "HAPPY";
        setname(newName);
    }
    return(
        <div className="happy">
            <h1>state</h1>
            <h2>{name}</h2>
            <button onClick={change}>감정변화</button>
        </div>
    );
}
export default Happy;