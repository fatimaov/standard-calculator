function Addition({ onAdditionClick }) {
    return (
        <>
            <div className="col">
                <button className="btn calc-btn calc-btn-accent w-100" onClick={onAdditionClick}>+</button>
            </div>
        </>
    )
}

export default Addition;
