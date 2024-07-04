import Add from './index';

describe('String calculator', () => {
  test('Should return 0 when empty value is passed as input', () => {
    expect(Add('')).toBe(0);
  });

  test('Should return 0 when only alphabet is passed as input', () => {
    expect(Add('a')).toBe(0);
    expect(Add('abc')).toBe(0);
  });

  test('Should return the same number when only character is passed as input', () => {
    expect(Add('1')).toBe(1);
    expect(Add('4')).toBe(4);
  });

  test('Should throw an error when a negative number is passed as input', () => {
    expect(Add('-1')).toBe('negative numbers not allowed -1');
    expect(Add('-1,234,-4,-5')).toBe('negative numbers not allowed -1,-4,-5');
  });

  test('Should add the numbers in the given comma separated string', () => {
    expect(Add('1,5')).toBe(6);
  });

  test('Should be able to handle any amount of numbers', () => {
    expect(Add('1,2,3,4')).toBe(10);
    expect(Add('1,2,3,4,5,6,7,8,9,10')).toBe(55);
  });

  test('Should be able to handle new lines between numbers (instead of commas)', () => {
    expect(Add('1\n2,3')).toBe(6);
  });
});
