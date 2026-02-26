function ClearAll({ onClearAllClick }) {
    return (
        <>
            <div className="col">
                <button className="btn btn-primary" onClick={onClearAllClick}>AC</button>
            </div>
        </>
    )
}

export default ClearAll;