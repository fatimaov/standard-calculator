function Display({ currentValue, result }) {

    const formatter = new Intl.NumberFormat('en-US');
    
    let formattedCurrentValue ;

    if (typeof currentValue === 'string') {
        const integerDigits = currentValue.split('').filter((_, i, arr) => i < arr.length - 1);
        formattedCurrentValue = formatter.format(Number(integerDigits.join(''))) + '.';
    } else {
        formattedCurrentValue = formatter.format(currentValue);
    }

    return (
        <>
            <div className="col p-0">
                <p className="bg-white text-end p-3 m-0">{currentValue ?  formattedCurrentValue : 0}</p>
                <p className="bg-white text-end p-3 m-0">total: {result ? formatter.format(result) : 0}</p>
            </div>
        </>
    )
}

export default Display;