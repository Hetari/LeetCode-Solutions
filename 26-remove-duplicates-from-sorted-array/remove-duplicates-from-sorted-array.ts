function removeDuplicates(nums: number[]): number {
  let k: number = 0;
  nums.sort((a, b)=> a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[k] = nums[i];
      k++;
    }
    else {
      continue
    }
  }

  return k
}