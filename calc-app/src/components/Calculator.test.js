// src/components/Calculator.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

test('displays initial value of 0', () => {
  render(<Calculator />);
  const display = screen.getByText('0');
  expect(display).toBeInTheDocument();
});

test('clears display when AC is clicked', () => {
  render(<Calculator />);
  const acButton = screen.getByText('AC');
  fireEvent.click(acButton);
  const display = screen.getByText('0');
  expect(display).toBeInTheDocument();
});

test('handles number input correctly', () => {
  render(<Calculator />);
  const button1 = screen.getByText('1');
  const button2 = screen.getByText('2');
  fireEvent.click(button1);
  fireEvent.click(button2);
  const display = screen.getByText('12');
  expect(display).toBeInTheDocument();
});

test('performs addition correctly', () => {
  render(<Calculator />);
  const button1 = screen.getByText('1');
  const buttonPlus = screen.getByText('+');
  const button2 = screen.getByText('2');
  const buttonEquals = screen.getByText('=');
  fireEvent.click(button1);
  fireEvent.click(buttonPlus);
  fireEvent.click(button2);
  fireEvent.click(buttonEquals);
  const display = screen.getByText('3');
  expect(display).toBeInTheDocument();
});

test('performs subtraction correctly', () => {
  render(<Calculator />);
  const button3 = screen.getByText('3');
  const buttonMinus = screen.getByText('-');
  const button1 = screen.getByText('1');
  const buttonEquals = screen.getByText('=');
  fireEvent.click(button3);
  fireEvent.click(buttonMinus);
  fireEvent.click(button1);
  fireEvent.click(buttonEquals);
  const display = screen.getByText('2');
  expect(display).toBeInTheDocument();
});

test('performs multiplication correctly', () => {
  render(<Calculator />);
  const button2 = screen.getByText('2');
  const buttonMultiply = screen.getByText('*');
  const button3 = screen.getByText('3');
  const buttonEquals = screen.getByText('=');
  fireEvent.click(button2);
  fireEvent.click(buttonMultiply);
  fireEvent.click(button3);
  fireEvent.click(buttonEquals);
  const display = screen.getByText('6');
  expect(display).toBeInTheDocument();
});

test('performs division correctly', () => {
  render(<Calculator />);
  const button8 = screen.getByText('8');
  const buttonDivide = screen.getByText('/');
  const button2 = screen.getByText('2');
  const buttonEquals = screen.getByText('=');
  fireEvent.click(button8);
  fireEvent.click(buttonDivide);
  fireEvent.click(button2);
  fireEvent.click(buttonEquals);
  const display = screen.getByText('4');
  expect(display).toBeInTheDocument();
});

test('handles decimal input correctly', () => {
  render(<Calculator />);
  const button1 = screen.getByText('1');
  const buttonDot = screen.getByText('.');
  const button2 = screen.getByText('2');
  fireEvent.click(button1);
  fireEvent.click(buttonDot);
  fireEvent.click(button2);
  const display = screen.getByText('1.2');
  expect(display).toBeInTheDocument();
});

test('handles sequential operations correctly', () => {
  render(<Calculator />);
  const button2 = screen.getByText('2');
  const buttonPlus = screen.getByText('+');
  const button3 = screen.getByText('3');
  const buttonMultiply = screen.getByText('*');
  const button4 = screen.getByText('4');
  const buttonEquals = screen.getByText('=');
  fireEvent.click(button2);
  fireEvent.click(buttonPlus);
  fireEvent.click(button3);
  fireEvent.click(buttonMultiply);
  fireEvent.click(button4);
  fireEvent.click(buttonEquals);
  const display = screen.getByText('20'); // 2 + 3 = 5; 5 * 4 = 20
  expect(display).toBeInTheDocument();
});
