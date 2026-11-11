export const isValidBrackets = (input: string): boolean => {
  const stack: string[] = [];
  const pairs: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (const char of input) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
        const lastOpen = stack.pop();
        if(lastOpen !== pairs[char]){
            return false
        }
    }
  }
  return stack.length === 0;
};

