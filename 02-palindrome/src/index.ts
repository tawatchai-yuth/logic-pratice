export const isPalindrome = (value: string): boolean => {
  const lowerCase = value.toLowerCase();

  const cleaned = lowerCase.replace(/[^a-z0-9]/g, "");
  const reversed = cleaned.split("").reverse().join("");
  return cleaned == reversed;
};