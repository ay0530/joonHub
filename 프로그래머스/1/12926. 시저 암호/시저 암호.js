const solution = (s, n) => {
  let result = '';
  let num;

  // 소문자 : 97~122
  // 대문자 : 65~90
  for (let i = 0; i < s.length; i++) {
    num = s.charCodeAt(i);
    // 대문자 
    if (num >= 65 && num <= 90) {
      num += n;
      if (num > 90) num -= 26;
      console.log("대문자 : " + num);
    }
    // 소문자
    else if (num >= 97 && num <= 122) {
      num += n;
      if (num > 122) num -= 26;
      console.log("소문자 : " + num);
    }
    result += String.fromCharCode(num);
  }
  return result;
};