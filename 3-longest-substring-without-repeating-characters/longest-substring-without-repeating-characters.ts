function lengthOfLongestSubstring(s: string): number {
    let seen: { [key: string]: number } = {};
    let maxLength: number = 0;
    let start: number = 0;

    for (let end: number = 0; end < s.length; end++) {
        let currentChar: string = s[end];

        if (seen[currentChar] !== undefined && seen[currentChar] >= start) {
            start = seen[currentChar] + 1;
        }

        seen[currentChar] = end;

        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}
