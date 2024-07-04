function Add(numbers: string): number | string {
  let sum = 0;
  if (numbers.length) {
    if (numbers.length === 1) {
      sum = Number(numbers);
    } else if (numbers.length > 1) {
    }
    const isNotANumber = isNaN(Number(numbers));
    if (isNotANumber) {
      sum = 0;
    }
  }
  return sum;
}

export default Add;
