const palindrome = str => {
  str = str.toLowerCase();
  if (Boolean(str)) {
    let reverseStr = str
      .split("")
      .reverse()
      .join("");
    return reverseStr === str;
  }
};

console.log(palindrome("Racecar"));
