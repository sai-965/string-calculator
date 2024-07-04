function Add(numbers: string): number | string {
  let result: number | string = 0;
  if (numbers.length) {
    if (numbers.length > 1 && numbers.includes('-')) {
      const splitNumbers = numbers.split('-');
      const negNumbers: string[] = [];

      // extract the negative numbers
      splitNumbers.forEach((item) => {
        if (item.length) {
          const firstChar = Number(item.split('')[0]);
          if (!isNaN(firstChar)) {
            negNumbers.push(`-${firstChar}`);
          }
        }
      });

      result = `negative numbers not allowed ${negNumbers.join(',')}`;
    }

    if (numbers.length === 1) {
      result = Number(numbers);
    } else if (numbers.length > 1) {
    }
    const isNotANumber = isNaN(Number(numbers));
    if (isNotANumber) {
      result = 0;
    }
  }
  return result;
}

export default Add;
