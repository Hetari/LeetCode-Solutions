class Solution:
    def maxArea(self, height: List[int]) -> int:
        right = len(height) - 1
        left = 0
        result = 0

        while left <= right:
                area = (right - left) * min(height[left], height[right])
                result = max(result, area)
                if height[left] <= height[right]:
                    left = left + 1
                else:
                    right = right - 1

        return result

        return result