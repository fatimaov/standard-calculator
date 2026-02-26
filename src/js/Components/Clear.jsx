function Clear({ onClearClick }) {
    return (
        <>
            <div className="col">
                <button className="btn btn-primary" onClick={onClearClick}>C</button>
            </div>
        </>
    )
}

export default Clear;