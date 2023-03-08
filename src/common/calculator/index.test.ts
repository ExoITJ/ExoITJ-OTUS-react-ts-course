import { getMathResult } from '.';

describe('Math results', () => {
  it.each`
    string             | expected
    ${'2+2*2'}         | ${6}
    ${'20/2'}          | ${10}
    ${'20^2'}          | ${400}
    ${'!5'}            | ${120}
    ${'2+2*2/20^2+!5'} | ${122}
  `('returns "$expected", when string value is "$first"', ({ string, expected }) =>
    expect(getMathResult(string)).toBe(expected),
  );
});
