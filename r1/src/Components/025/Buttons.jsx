

function Buttons({setNumber, t, c}) {


    const doNumber = what => {
        setNumber(n => n + what);
    }


    return (
        <>
        
        <div className="dog-bin">
            {
                [...Array(c)].map((_, i) => <button key={i} onClick={() => doNumber(t + (i + 1))}>{t + (i + 1)}</button>)
            }
        </div>
        </>
    )
}

export default Buttons;