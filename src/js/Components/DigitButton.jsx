function DigitButton({ value, onNumberClick }) {

    return (
        <>
            <div className="col">
                <button className="btn btn-primary" value={value} onClick={onNumberClick}>{value}</button>
            </div>
        </>
    )
}

export default DigitButton;