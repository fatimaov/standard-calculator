function DigitButton({ value }) {

    return (
        <>
            <div className="col">
                <button className="btn btn-primary" value={value}>{value}</button>
            </div>
        </>
    )
}

export default DigitButton;