import { divisionFunc, factorialFunc, minusFunc, multipleFunc, plusFunc, powFunc } from './math';

describe('Math functions', () => {
  it.each`
    first | second | expected
    ${10} | ${20}  | ${30}
    ${10} | ${-11} | ${-1}
  `('returns "$expected", when first value is "$first" and second value is "$second"', ({ first, second, expected }) =>
    expect(plusFunc(first, second)).toBe(expected),
  );

  it.each`
    first | second | expected
    ${10} | ${20}  | ${-10}
    ${5}  | ${-2}  | ${7}
  `('returns "$expected", when first value is "$first" and second value is "$second"', ({ first, second, expected }) =>
    expect(minusFunc(first, second)).toBe(expected),
  );

  it.each`
    first | second | expected
    ${10} | ${20}  | ${200}
    ${5}  | ${-2}  | ${-10}
  `('returns "$expected", when first value is "$first" and second value is "$second"', ({ first, second, expected }) =>
    expect(multipleFunc(first, second)).toBe(expected),
  );

  it.each`
    first | second | expected
    ${10} | ${20}  | ${0.5}
    ${5}  | ${-2}  | ${-2.5}
  `('returns "$expected", when first value is "$first" and second value is "$second"', ({ first, second, expected }) =>
    expect(divisionFunc(first, second)).toBe(expected),
  );

  it.each`
    first | expected
    ${5}  | ${120}
  `('returns "$expected", when first value is "$first" and second value is "$second"', ({ first, second, expected }) =>
    expect(factorialFunc(first)).toBe(expected),
  );

  it.each`
    first | second | expected
    ${5}  | ${2}   | ${25}
    ${-5} | ${3}   | ${-125}
  `('returns "$expected", when first value is "$first" and second value is "$second"', ({ first, second, expected }) =>
    expect(powFunc(first, second)).toBe(expected),
  );
});
