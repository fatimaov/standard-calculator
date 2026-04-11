function Subtraction({ onSubtractionClick }) {
    return (
        <>
            <div className="col">
                <button className="btn calc-btn calc-btn-accent w-100" onClick={onSubtractionClick}>-</button>
            </div>
        </>
    )
}

export default Subtraction;
