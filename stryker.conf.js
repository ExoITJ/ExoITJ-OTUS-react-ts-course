// This config was generated using a preset.
// Please see the handbook for more information: https://github.com/stryker-mutator/stryker-handbook/blob/master/stryker/guides/react.md#react
module.exports = {
  mutate: ['src/**/*.ts?(x)', '!src/**/*@(.test|.spec|Spec).ts?(x)'],
  mutator: 'typescript',
  testRunner: 'jest',
  reporters: ['progress', 'clear-text', 'html'],
  coverageAnalysis: 'off',
  jest: {
    projectType: 'create-react-app',
  },
  tsconfigFile: 'tsconfig.json',
};
