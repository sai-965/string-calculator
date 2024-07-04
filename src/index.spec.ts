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
  });
});
