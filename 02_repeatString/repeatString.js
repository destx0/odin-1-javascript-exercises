const repeatString = function (word, num) {
  tmp = "";
  if (num<0) {
    return "ERROR"
  }
  for (let i = 0; i < num; i++) {
    tmp += word;
  }
  return tmp;
};

// Do not edit below this line
module.exports = repeatString;
