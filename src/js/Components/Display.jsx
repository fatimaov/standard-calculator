function Display({ currentValue, result }) {
    return (
        <>
            <div className="col p-0">
                <p className="bg-white text-end p-3 m-0">{currentValue ? currentValue : 0}</p>
                <p className="bg-white text-end p-3 m-0">total: {result ? result : 0}</p>
            </div>
        </>
    )
}

export default Display;