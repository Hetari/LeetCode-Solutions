function longestCommonPrefix(strings: string[]): string {
  if (strings.length === 0) return "";
  if (strings.length === 1) return strings[0];

  let prefix = strings[0];
  let isTherePrefix: boolean = false;

  for (let i = 1; i < strings.length; i++) {
    isTherePrefix = strings[i].indexOf(prefix) == 0;

    while (strings[i].indexOf(prefix) != 0) {
      isTherePrefix = true;
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return isTherePrefix ? prefix : "";
}