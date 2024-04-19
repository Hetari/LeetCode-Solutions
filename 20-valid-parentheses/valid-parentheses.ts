function isValid(s: string): boolean {
  const arr: string[] = s.split("");
  let stack: string[] = [];

  if (arr.length == 1) return false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "(" || arr[i] == "[" || arr[i] == "{") {
      stack.push(arr[i]);
      continue;
    }

    if (arr[i] == ")" || arr[i] == "]" || arr[i] == "}") {
      const top = stack.pop();
      console.log(top);
      console.log(arr[i]);

      console.log(arr[i] === ")" && top === "(");
      console.log(arr[i] === "]" && top === "[");
      console.log(arr[i] === "}" && top === "{");

      if (
        (arr[i] == ")" && top == "(") ||
        (arr[i] == "]" && top == "[") ||
        (arr[i] == "}" && top == "{")
      ) {
      } else return false;
    }
  }

  return stack.length === 0;
}