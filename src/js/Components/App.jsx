import { useState } from "react"

import Addition from "./Addition"
import Clear from "./Clear"
import ClearAll from "./ClearAll"
import DecimalPoint from "./DecimalPoint"
import DigitButton from "./DigitButton"
import Display from "./Display"
import Division from "./Division"
import Equals from "./Equals"
import Modulus from "./Modulus"
import Multiplication from "./Multiplication"
import Subtraction from "./Subtraction"


function App() {
    const [currentValue, setCurrentValue] = useState(0)
	console.log("currentValue", currentValue)
	const [previousValue, setPreviousValue] = useState(null)
	console.log("previousValue", previousValue)
	const [operation, setOperation] = useState(null)
	console.log("operation", operation)
	const [result, setResult] = useState(null)
	console.log("result", result)

    return (
        <>
            <div className="container bg-secondary p-5">
                <div id="display" className="row ">
                    <Display />
                </div>
                <div>
                    <div className="row row-cols-4 text-center mt-2">
                        <ClearAll />
                        <Division />
                        <Multiplication />
                        <Clear />
                    </div>
                    <div className="row row-cols-4 text-center mt-2">
                        {[7, 8, 9].map((digit) => <DigitButton key={digit} value={digit} />)}
                        <Subtraction />
                    </div>
                    <div className="row row-cols-4 text-center mt-2">
                        {[4, 5, 6].map((digit) => <DigitButton key={digit} value={digit} />)}
                        <Addition />
                    </div>
                    <div className="row row-cols-2 text-center mt-2">
                        <div className="col-9">
                            <div className="row row-cols-3">
                                {[1, 2, 3].map((digit) => <DigitButton key={digit} value={digit} />)}
                            </div>
                            <div className="row row-cols-3">
                                <Modulus />
                                <DigitButton value={0} />
                                <DecimalPoint />
                            </div>
                        </div>
                        <Equals />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
