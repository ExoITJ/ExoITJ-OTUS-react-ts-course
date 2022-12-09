// Мат.операторы
export type OperationType = (first: number, second: number) => number;
export type OperationResultType = (value: number) => number;
export type OperatorsTypes = '+' | '-' | '*' | '/' | '!' | '^';

export const plusFunc: OperationType = (first, second) => first + second;
export const minusFunc: OperationType = (first, second) => first - second;
export const multipleFunc: OperationType = (first, second) => first * second;
export const divisionFunc: OperationType = (first, second) => first / second;
export const factorialFunc: OperationResultType = (first) => (first ? first * factorialFunc(first - 1) : 1);
export const powFunc: OperationType = (first, second) => Math.pow(first, second);

export const Operators: { [key: string]: OperatorsTypes } = Object.freeze({
  plus: '+',
  minus: '-',
  multiple: '*',
  division: '/',
  factorial: '!',
  pow: '^',
});

export const OperatorsPriority = Object.freeze([
  [[Operators.multiple, Operators.division, Operators.factorial, Operators.pow]],
  [[Operators.plus, Operators.minus]],
]);
