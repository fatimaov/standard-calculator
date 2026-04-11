function ClearAll({ onClearAllClick }) {
    return (
        <>
            <div className="col">
                <button className="btn calc-btn calc-btn-muted w-100" onClick={onClearAllClick}>AC</button>
            </div>
        </>
    )
}

export default ClearAll;
