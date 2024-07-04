function Add(numbers: string): number | string {
  let result: number | string = 0;
  if (numbers.length) {
    if (numbers.length > 1 && numbers.includes('-')) {
      const splitNumbers = numbers.split('-');
      const negNumbers: string[] = [];

      // Extract the negative numbers
      splitNumbers.forEach((item) => {
        if (item.length) {
          const firstChar = Number(item.split('')[0]);
          if (!isNaN(firstChar)) {
            negNumbers.push(`-${firstChar}`);
          }
        }
      });

      result = `negative numbers not allowed ${negNumbers.join(',')}`;
      return result;
    }

    if (numbers.length === 1) {
      result = Number(numbers);
    } else if (numbers.length > 1) {
      // Perform the main logic to add only numbers
      const replaceChars = numbers.replace(/[^0-9]/g, ',');
      if (replaceChars.length) {
        const extractedNumbers = replaceChars
          .split(',')
          .filter((item) => item.length)
          .map((item) => Number(item));
        result = extractedNumbers.reduce((a, b) => a + b, 0);
        return result;
      }
    }

    // Check if passed value does not contain any numbers in it
    const isNotANumber = isNaN(Number(numbers));
    if (isNotANumber) {
      result = 0;
    }
  }
  return result;
}

export default Add;
