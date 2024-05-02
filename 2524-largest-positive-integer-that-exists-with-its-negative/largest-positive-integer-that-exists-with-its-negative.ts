function findMaxK(nums: number[]): number {
  const seen = new Set<number>();
  let largestK = -1;

  for (const num of nums) {
    if (seen.has(-num) && Math.abs(num) > largestK) {
      largestK = Math.abs(num);
    }
    seen.add(num);
  }

  return largestK;
}