const operationHandlers = {
    addition: (firstOperand, secondOperand) => firstOperand + secondOperand,
    subtraction: (firstOperand, secondOperand) => secondOperand < 0 ? firstOperand + secondOperand : firstOperand - secondOperand,
    multiplication: (firstOperand, secondOperand) => firstOperand * secondOperand,
    division: (firstOperand, secondOperand) => firstOperand / secondOperand,
    modulus: (firstOperand, secondOperand) => firstOperand % secondOperand,
}

export default operationHandlers;