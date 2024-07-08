class Solution:
    def longestPalindrome(self, s: str) -> str:
        # Naive Approach
        # words_map = []
        # # O(n^2)
        # for index, char in enumerate(s):
        #     temp = char
        #     for c in s[index + 1:]:
        #         temp += c
        #         if temp == temp[::-1]:
        #             words_map.append(temp)
        # # O(n)
        # return max(words_map)
        result = ""
        result_len = 0

        for i in range(len(s)):
            # odd len
            left, right = i, i
            while left >= 0 and right < len(s) and s[left] == s[right]:
                if (right - left + 1) > result_len:
                    result = s[left:right + 1]
                    result_len = right - left + 1
                left -= 1
                right += 1
            
            # even len
            left, right = i, i + 1
            while left >= 0 and right < len(s) and s[left] == s[right]:
                if (right - left + 1) > result_len:
                    result = s[left:right + 1]
                    result_len = right - left + 1
                left -= 1
                right += 1
        return result