function DecimalPoint({ onDecimalClick }) {

    return (
        <>
            <div className="col">
                <button className="btn calc-btn calc-btn-base w-100" onClick={onDecimalClick}>.</button>
            </div>
        </>
    )
}

export default DecimalPoint;
