class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s

        temp = [""] * numRows
        dir = "down"
        row = 0

        for char in s:
            temp[row] += char

            # Check if the row is at the top or bottom of the pattern
            if row == numRows - 1:
                dir = "up"
            elif row == 0:
                dir = "down"

            # Update the row index based on the direction of movement
            if dir == 'up':
                row -= 1
            else:
                row += 1

        return "".join(temp)