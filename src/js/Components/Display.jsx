function Display({ currentValue, result }) {

    const formatter = new Intl.NumberFormat('en-US');
    
    let formattedCurrentValue ;

    if (typeof currentValue === 'string' && /^\d+\.0$/.test(currentValue)) {
        const integerDigits = currentValue.split('').filter((_, i, arr) => i < arr.length - 1);
        formattedCurrentValue = formatter.format(Number(integerDigits.join(''))) + '.0';
    } else if (typeof currentValue === 'string') {
        const integerDigits = currentValue.split('').filter((_, i, arr) => i < arr.length - 1);
        formattedCurrentValue = formatter.format(Number(integerDigits.join(''))) + '.';
    } else {
        formattedCurrentValue = formatter.format(currentValue);
    }

    return (
        <>
            <div className="col p-0">
                <div className="display-panel text-end p-3 p-md-4">
                    <p className="display-label mb-2">Result</p>
                    <p className="display-result mb-2">{result ? formatter.format(result) : 0}</p>
                    <p className="display-value mb-0">{currentValue ?  formattedCurrentValue : 0}</p>
                </div>
            </div>
        </>
    )
}

export default Display;
