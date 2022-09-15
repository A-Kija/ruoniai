import { useState } from "react";

function Buttons() {

    const [number, setNumber] = useState(0);

    return (
        <>
        <h2>{number}</h2>
        <div className="dog-bin">
            {
                [...Array(50)].map((_, i) => <button key={i} onClick={() => setNumber(i + 1)}>{i + 1}</button>)
            }
        </div>
        </>
    )
}

export default Buttons;