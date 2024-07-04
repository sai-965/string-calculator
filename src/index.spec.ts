import Add from './index';

describe('String calculator', () => {
  test('Should return 0 when empty value is passed as input', () => {
    expect(Add('')).toBe(0)
  })

  test('Should return 0 when only alphabet is passed as input', () => {
    expect(Add('a')).toBe(0)
    expect(Add('abc')).toBe(0)
  })
});
