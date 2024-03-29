function twoSum(nums: number[], target: number): number[] {
    const numIndices: { [key: number]: number } = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numIndices[complement] !== undefined) {
            return [numIndices[complement], i];
        }
        numIndices[nums[i]] = i;
    }
    // we will not hit this point ever
    return [-1, -1];
}