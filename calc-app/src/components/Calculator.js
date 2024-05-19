import React, { useState } from 'react';
import Button from './Button';
import '../css-sheets/Calculator.css'

function Calculator() {
  const [currentValue, setCurrentValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [waitingOperand, setWaitingOperand] = useState(false);
  const [operand, setOperand] = useState(null);


  const handleButtonClick = (value) => {
    if (value === 'AC') {
      setCurrentValue('0');
      setOperator(null);
      setWaitingOperand(false)
      setOperand(null)
      return;
    }
    if (value === '.') {
      if (!currentValue.includes('.')) {
        setCurrentValue(currentValue + '.');
      }
      return;
    }


    if (['/', '+', '-', '*'].includes(value)) {
      if (operator && waitingOperand) {
        setOperator(value);
        return;
      }
    
      if (operand == null) {
        setOperand(parseFloat(currentValue));
      } else if (operator) {
        const newValue = calculation(operand, operator, parseFloat(currentValue)); // Correct operand for calculation
        setCurrentValue(String(newValue));
        setOperand(newValue);
      }
    
      setOperator(value);
      setWaitingOperand(true);
      return;
    }
    

    if (value === '=') {
      if (operator && operand !== null) { // Ensure there's a valid operand
        const newValue = calculation(operand, operator, parseFloat(currentValue)); // Correct operand for calculation
        setCurrentValue(String(newValue));
        setOperand(null);
        setOperator(null);
        setWaitingOperand(false);
      }
      return; // Added return to prevent further execution
    }
    

    if (waitingOperand) {
      setCurrentValue(value);
      setWaitingOperand(false);
    }
    else {
      setCurrentValue(currentValue === '0' ? value : currentValue + value);
    }
  };


  const calculation = (operand1, operator, operand2) => {
    switch (operator) {
      case '/':
        if (operand2 === 0){
          return "Divison by zero error"
        }
        return operand1 / operand2;
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      case '*':
        return operand1 * operand2;
      default:
        return operand2;
    }
  };

  return (
    <>
      <div className='calculator'>
        <div className='display-bar'>{currentValue}</div>
        <div className='button-container'>
          {['1', '2', '3', 'AC', '4', '5', '6', '+', '7', '8', '9', '-', '.', '0', '/', '*', '='].map((item) => (
            <Button key={item} value={item} onClick={handleButtonClick} />
          ))}
        </div>

      </div>

    </>
  )
}

export default Calculator
