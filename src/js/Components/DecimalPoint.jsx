function DecimalPoint({ onDecimalClick }) {

    return (
        <>
            <div className="col">
                <button className="btn btn-primary" onClick={onDecimalClick}>.</button>
            </div>
        </>
    )
}

export default DecimalPoint;