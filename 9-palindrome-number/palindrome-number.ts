/**
 * Checks if a given number is a palindrome.
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is a palindrome, false otherwise.
 */
function isPalindrome(num: number): boolean {
  // Palindromes cannot be negative numbers
  if (num < 0) return false;

  // Store the original number for comparison later
  let reverseNum: number = 0;
  let originalNum: number = num;

  // Reverse the number
  while (num !== 0) {
    // Extract the last digit of the number and append it to reverseNum
    reverseNum = reverseNum * 10 + (num % 10);
    // Remove the last digit from the original number
    num = Math.floor(num / 10);
  }

  // Check if the original number is equal to its reversed version
  return originalNum === reverseNum;
}
