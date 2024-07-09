class Solution:
    def reverse(self, x: int) -> int:
        y = 0
        less_then_zero = x < 0
        x = abs(x)
        while x > 0:
            y = y * 10 + x % 10
            x = x // 10

        if less_then_zero:
            y = y * -1

        if y <= -2**31 or y >= 2**31 - 1:
            return 0
        return y 