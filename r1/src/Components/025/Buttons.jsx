

function Buttons({setNumber}) {


    const doNumber = what => {
        setNumber(n => n + what);
    }


    return (
        <>
        
        <div className="dog-bin">
            {
                [...Array(50)].map((_, i) => <button key={i} onClick={() => doNumber(i + 1)}>{i + 1}</button>)
            }
        </div>
        </>
    )
}

export default Buttons;