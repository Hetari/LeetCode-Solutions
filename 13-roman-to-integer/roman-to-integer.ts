/**
 * Converts a Roman numeral string to an integer.
 * @param {string} s - The Roman numeral string to convert.
 * @returns {number} The integer representation of the Roman numeral.
 */
function romanToInt(s: string): number {
  // Define a mapping between Roman numeral characters and their corresponding integer values
  const romanMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // Initialize the total integer value to 0
  let total: number = 0;

  // Iterate through the Roman numeral string from right to left
  for (let i = s.length - 1; i >= 0; i--) {
    // Get the current Roman numeral character and its corresponding integer value
    const currentChar: string = s[i];
    const currentVal: number = romanMap[currentChar];

    // Get the next Roman numeral character and its corresponding integer value
    // Note: Handle the case where there is no next character by defaulting to 0
    const nextChar: string = s[i + 1] || ''; // Default to an empty string if there's no next character
    const nextVal: number = romanMap[nextChar];

    // Compare the current value with the next value to determine whether to add or subtract
    if (nextVal > currentVal) {
      // If the next value is greater than the current value, subtract the current value from the total
      total -= currentVal;
    } else {
      // Otherwise, add the current value to the total
      total += currentVal;
    }
  }

  // Return the accumulated total integer value
  return total;
}
