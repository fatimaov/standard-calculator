function Addition({ onAdditionClick }) {
    return (
        <>
            <div className="col">
                <button className="btn btn-primary" onClick={onAdditionClick}>+</button>
            </div>
        </>
    )
}

export default Addition;