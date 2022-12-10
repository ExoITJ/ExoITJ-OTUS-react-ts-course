import {
  multipleFunc,
  plusFunc,
  minusFunc,
  divisionFunc,
  factorialFunc,
  powFunc,
  Operators,
  OperatorsPriority,
  OperatorsTypes,
} from './math';

type RegExpMatchResult = [_: string, first: string, operator: OperatorsTypes, second: string];

export const getMathResult = (inputStr: string) => {
  if (!inputStr) return 0;
  let inputStringFormat = inputStr.replace(/[^0-9\!^*\/\-+.]/g, '');
  let result = 0;

  for (let i = 0; i < OperatorsPriority.length; i++) {
    let regOperators = new RegExp('(\\d+\\.?\\d*)?([\\' + OperatorsPriority[i].join('\\') + '])(\\d+\\.?\\d*)?');
    regOperators.lastIndex = 0;

    while (regOperators.test(inputStringFormat)) {
      const [_, first, operator, second] = inputStringFormat.match(regOperators) as RegExpMatchResult;
      result = calculate(parseInt(first), operator, parseInt(second));
      if (isNaN(result) || !isFinite(result)) return result;
      inputStringFormat = inputStringFormat.replace(regOperators, result.toString());
    }
  }

  return result;

  function calculate(a: number, operation: OperatorsTypes, b: number) {
    switch (operation) {
      case Operators.plus:
        return plusFunc(a, b);
      case Operators.minus:
        return minusFunc(a, b);
      case Operators.multiple:
        return multipleFunc(a, b);
      case Operators.division:
        return divisionFunc(a, b);
      case Operators.factorial:
        return factorialFunc(b);
      case Operators.pow:
        return powFunc(a, b);
      default:
        return 0;
    }
  }
};
