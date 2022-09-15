import { useState } from "react";

function Buttons() {

    const [number, setNumber] = useState(0);

    const doNumber = what => {
        setNumber(what);
    }

    return (
        <>
        <h2>{number}</h2>
        <div className="dog-bin">
            {
                [...Array(50)].map((_, i) => <button key={i} onClick={() => doNumber(i + 1)}>{i + 1}</button>)
            }
        </div>
        </>
    )
}

export default Buttons;