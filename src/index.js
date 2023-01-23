module.exports = function check(str, bracketsConfig) {
  var i,
    l = str.length,
    char,
    last,
    stack = [];

  for (i = 0; i < l; i++) {
    char = str[i];

    if (char == '{' || char == '(') {
      stack.push(char);
    } else if (char == '}' || char == ')') {
      if (stack.length > 0) {
        last = stack[stack.length - 1];
        if ((char == '}' && last == '{') || (char == ')' && last == '(')) {
          stack.pop();
        }
      }
    }
  }
  return stack.length == 0;
};
