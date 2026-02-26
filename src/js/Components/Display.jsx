function Display({ currentValue, result }) {

    const formatter = new Intl.NumberFormat('en-US');

    return (
        <>
            <div className="col p-0">
                <p className="bg-white text-end p-3 m-0">{currentValue ? formatter.format(currentValue) : 0}</p>
                <p className="bg-white text-end p-3 m-0">total: {result ? formatter.format(result) : 0}</p>
            </div>
        </>
    )
}

export default Display;