export type OperationType = (first: number, second: number) => number;
export type OperationResultType = (value: number) => number;

export const plus: OperationType = (first, second) => first + second;
export const minus: OperationType = (first, second) => first - second;
export const multiple: OperationType = (first, second) => first * second;
export const division: OperationType = (first, second) => first / second;
export const factorial: OperationResultType = (first) => (first ? first * factorial(first - 1) : 1);
export const pow: OperationType = (first, second) => Math.pow(first, second);

export const enum Operators {
  '+',
  '-',
  '*',
  '/',
  '!',
  '^',
}

export const OPERATORS_INFO = {
  [Operators['+']]: plus,
  [Operators['-']]: minus,
  [Operators['*']]: multiple,
  [Operators['/']]: division,
  [Operators['!']]: factorial,
  [Operators['^']]: pow,
};

export const enum MathPriority {
  start = 0,
  first = 1,
  second = 2,
  third = 3,
  fourth = 4,
}
export const MATH_PRIORITY_INFO = {
  [Operators['+']]: MathPriority.start,
  [Operators['-']]: MathPriority.first,
  [Operators['*']]: MathPriority.third,
  [Operators['/']]: MathPriority.third,
  [Operators['!']]: MathPriority.fourth,
  [Operators['^']]: MathPriority.fourth,
};
