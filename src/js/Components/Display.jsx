function Display({ currentValue, result }) {

    const formatter = new Intl.NumberFormat('en-US');
    
    let formattedCurrentValue ;

    if (typeof currentValue === 'string') {
        const decimalIndex = currentValue.indexOf('.');
        const integerDigits = currentValue.slice(0, decimalIndex);
        const decimalPart = currentValue.slice(decimalIndex + 1);
        formattedCurrentValue = formatter.format(Number(integerDigits)) + '.' + decimalPart;
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
