function Equals({ onEqualsClick }) {
    return (
        <>
            <div className="col-3">
                <button className="btn calc-btn calc-btn-accent h-100 w-100" onClick={onEqualsClick}>=</button>
            </div>
        </>
    )
}

export default Equals;
