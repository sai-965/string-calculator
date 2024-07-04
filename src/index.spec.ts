import Add from './index';

describe('String calculator', () => {
  test('Should return 0 when empty value is passed as input', () => {
    expect(Add('')).toBe(0)
  })
});
