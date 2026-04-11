import { useState, useEffect, useRef } from "react"

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

import operationHandlers from "../arithmeticOperations"


function App() {
    const [currentValue, setCurrentValue] = useState(0)
    const [previousValue, setPreviousValue] = useState(null)
    const [operation, setOperation] = useState(null)
    const [result, setResult] = useState(null)

    const handlersRef = useRef({});

    // Number
    function handleNumberClick(digit) {
        if (result !== 0) {
            setResult(() => null)
        }
        if (currentValue.toString().length === 10) {
            return;
        }
        setCurrentValue(prev => typeof digit !== 'string' ? Number(prev + digit.target.value) : Number(prev + digit))
    }

    // Decimal
    function handleDecimalClick() {
        if (!Number.isInteger(currentValue)) {
            return;
        }
        setCurrentValue(() => (currentValue.toString()) + ".");
    }

    // Addition 
    function handleAdditionClick() {
        typeof currentValue === 'string' ? setPreviousValue(() => Number(currentValue)) : setPreviousValue(() => currentValue);
        setOperation(() => operationHandlers.addition);
        setCurrentValue(() => '');
    }

    // Subtraction
    function handleSubtractionClick() {
        if (!currentValue && !previousValue || operation && !currentValue) {
            return setCurrentValue(() => '-')
        }
        typeof currentValue === 'string' ? setPreviousValue(() => Number(currentValue)) : setPreviousValue(() => currentValue);
        setOperation(() => operationHandlers.subtraction)
        setCurrentValue(() => '')
    }

    // Multiplication
    function handleMultiplicationClick() {
        typeof currentValue === 'string' ? setPreviousValue(() => Number(currentValue)) : setPreviousValue(() => currentValue);
        setOperation(() => operationHandlers.multiplication)
        setCurrentValue(() => '')
    }

    // Division
    function handleDivisionClick() {
        typeof currentValue === 'string' ? setPreviousValue(() => Number(currentValue)) : setPreviousValue(() => currentValue);
        setOperation(() => operationHandlers.division)
        setCurrentValue(() => '')
    }

    // Modulus
    function handleModulusClick() {
        typeof currentValue === 'string' ? setPreviousValue(() => Number(currentValue)) : setPreviousValue(() => currentValue);
        setOperation(() => operationHandlers.modulus)
        setCurrentValue(() => '')
    }

    // Clear
    function handleClearClick() {
        const clearResultArr =
            currentValue
                .toString()
                .split('')
                .filter((_, i, arr) => i !== (arr.length - 1));

        !clearResultArr[(clearResultArr.indexOf('.') + 1)] ? setCurrentValue(() => clearResultArr.join('')) : setCurrentValue(() => Number(clearResultArr.join('')));
    }

    // Clear All
    function handleClearAllClick() {
        setCurrentValue(() => '')
        setPreviousValue(() => null)
        setResult(() => null)
    }

    // Equals
    function handleEqualsClick() {
        if (!previousValue && !currentValue) {
            return;
        }

        if (currentValue && !previousValue) {
            setResult(() => typeof currentValue === 'string' ? Number(currentValue) : currentValue)
            setCurrentValue(() => '')
            return;
        }

        setResult(() => operation(previousValue, typeof currentValue === 'string' ? Number(currentValue) : currentValue))
        setCurrentValue(() => '')
        setPreviousValue(() => null)
    }

    useEffect(() => {
        handlersRef.current = {
            handleNumberClick,
            handleAdditionClick,
            handleSubtractionClick,
            handleMultiplicationClick,
            handleDivisionClick,
            handleModulusClick,
            handleDecimalClick,
            handleEqualsClick,
            handleClearAllClick,
            handleClearClick,
        }
    })

    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key.match(/\d/)) {
                handlersRef.current.handleNumberClick(e.key);
            }
            switch (e.key) {
                case '+':
                    handlersRef.current.handleAdditionClick();
                    break;
                case '-':
                    handlersRef.current.handleSubtractionClick();
                    break;
                case '/':
                    handlersRef.current.handleDivisionClick();
                    break;
                case ':':
                    handlersRef.current.handleDivisionClick();
                    break;
                case '*':
                    handlersRef.current.handleMultiplicationClick();
                    break;
                case '%':
                    handlersRef.current.handleModulusClick();
                    break;
                case '.':
                    handlersRef.current.handleDecimalClick();
                    break;
                case 'Enter':
                    handlersRef.current.handleEqualsClick();
                    break;
                case 'Backspace':
                    handlersRef.current.handleClearClick();
                    break;
                case 'Escape':
                    handlersRef.current.handleClearAllClick();
                    break;
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);

    }, [])


    return (
        <>
            <div className="container bg-secondary p-5">
                <div id="display" className="row ">
                    <Display currentValue={currentValue} result={result} />
                </div>
                <div>
                    <div className="row row-cols-4 text-center mt-2">
                        <ClearAll onClearAllClick={handleClearAllClick} />
                        <Division onDivisionClick={handleDivisionClick} />
                        <Multiplication onMultiplicacionClick={handleMultiplicationClick} />
                        <Clear onClearClick={handleClearClick} />
                    </div>
                    <div className="row row-cols-4 text-center mt-2">
                        {[7, 8, 9].map((digit) => <DigitButton key={digit} value={digit} onNumberClick={handleNumberClick} />)}
                        <Subtraction onSubtractionClick={handleSubtractionClick} />
                    </div>
                    <div className="row row-cols-4 text-center mt-2">
                        {[4, 5, 6].map((digit) => <DigitButton key={digit} value={digit} onNumberClick={handleNumberClick} />)}
                        <Addition onAdditionClick={handleAdditionClick} />
                    </div>
                    <div className="row row-cols-2 text-center mt-2">
                        <div className="col-9">
                            <div className="row row-cols-3">
                                {[1, 2, 3].map((digit) => <DigitButton key={digit} value={digit} onNumberClick={handleNumberClick} />)}
                            </div>
                            <div className="row row-cols-3">
                                <Modulus onModulusClick={handleModulusClick} />
                                <DigitButton value={0} onNumberClick={handleNumberClick} />
                                <DecimalPoint onDecimalClick={handleDecimalClick} />
                            </div>
                        </div>
                        <Equals onEqualsClick={handleEqualsClick} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
