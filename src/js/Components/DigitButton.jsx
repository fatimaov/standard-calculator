function DigitButton({ value, onNumberClick }) {

    return (
        <>
            <div className="col">
                <button className="btn calc-btn calc-btn-base w-100" value={value} onClick={onNumberClick}>{value}</button>
            </div>
        </>
    )
}

export default DigitButton;
