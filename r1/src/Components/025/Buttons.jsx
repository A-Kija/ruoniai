function Buttons() {

    return (
        <>
        <div className="dog-bin">
            {
                [...Array(50)].map((_, i) => <button key={i} onClick={() => console.log('Va')}>{i + 1}</button>)
            }
        </div>
        </>
    )
}

export default Buttons;