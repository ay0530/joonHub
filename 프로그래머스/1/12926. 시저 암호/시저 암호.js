const solution = (s, n) => {
  let result = '';
  let num;

  for (let i = 0; i < s.length; i++) {
    num = s.charCodeAt(i);
    // 대문자 
    if (num >= 65 && num <= 90) {
      num += n;
      if (num > 90) num -= 26;
    }
    // 소문자
    else if (num >= 97 && num <= 122) {
      num += n;
      if (num > 122) num -= 26;
    }
    result += String.fromCharCode(num);
  }
  return result;
};