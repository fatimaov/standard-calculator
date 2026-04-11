function Clear({ onClearClick }) {
    return (
        <>
            <div className="col">
                <button className="btn calc-btn calc-btn-muted w-100" onClick={onClearClick}>C</button>
            </div>
        </>
    )
}

export default Clear;
