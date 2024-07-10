class Solution:
    def myAtoi(self, s: str) -> int:
        negative = False
        result = 0
        i = 0
        n = len(s)
        
        # Skip leading whitespaces
        while i < n and s[i] == ' ':
            i += 1
        
        # Check for the sign
        if i < n and (s[i] == '-' or s[i] == '+'):
            negative = s[i] == '-'
            i += 1
        
        # Convert digits to integer
        while i < n and s[i].isdigit():
            result = result * 10 + int(s[i])
            i += 1
        
        # Apply the sign
        if negative:
            result = -result
        
        # Clamp the result to the 32-bit signed integer range
        INT_MIN, INT_MAX = -2**31, 2**31 - 1
        if result < INT_MIN:
            return INT_MIN
        if result > INT_MAX:
            return INT_MAX
        
        return result
