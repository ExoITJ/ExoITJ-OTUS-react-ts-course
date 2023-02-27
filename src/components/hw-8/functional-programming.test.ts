import {
  dataFactory,
  getDeepObjectData,
  getMaxCountFromData,
  getObjectFromQueryString,
  getQueryStringFromObject,
  getSingleData,
  nonMutableChangeArray,
  nonMutableChangeDeepObject,
  nonMutableChangeObject,
} from './functional-programming';

const arrayTestData = dataFactory(50);
const objectTestData = getSingleData();
const deepObjectTestData = getDeepObjectData();

describe('HomeWork 8 Functional Programming', () => {
  test('getMaxCountFromData', () => {
    const funcResult = getMaxCountFromData(arrayTestData);

    expect(funcResult).toBe('Factory_Data_49');
    expect(arrayTestData).toHaveLength(50);
  });

  test('getQueryStringFromObject', () => {
    const funcResult = getQueryStringFromObject(objectTestData);

    expect(funcResult).toBe('name=Factory_Data_100&count=100');
  });

  test('getObjectFromQueryString', () => {
    const testString = 'name=Factory_Data_100&count=100';
    const funcResult = getObjectFromQueryString(testString);

    expect(funcResult).toEqual(objectTestData);
    expect(funcResult.count).toBe(100);
    expect(funcResult.name).toBe('Factory_Data_100');
  });

  test('nonMutableChangeObject', () => {
    const funcResult = nonMutableChangeObject(objectTestData);

    expect(funcResult.name).toBe('Changed_Factory_Data_100');
    expect(objectTestData.name).toBe('Factory_Data_100');
  });

  test('nonMutableChangeArray', () => {
    const funcResult = nonMutableChangeArray(arrayTestData);

    funcResult?.forEach(({ name, count }) => expect(name).toBe(`Changed_Array_Factory_Data_${count}`));
    arrayTestData.forEach(({ name }, index) => expect(name).toBe(`Factory_Data_${index}`));
  });

  test('nonMutableChangeDeepObject', () => {
    expect(deepObjectTestData.diving.deeper.still.inPlace.text).toBe('You are so deep');

    const funcResult = nonMutableChangeDeepObject(deepObjectTestData);

    expect(funcResult.diving.deeper.still.inPlace.text).toBe('Hello');
    expect(deepObjectTestData.diving.deeper.still.inPlace.text).toBe('You are so deep');
  });
});
