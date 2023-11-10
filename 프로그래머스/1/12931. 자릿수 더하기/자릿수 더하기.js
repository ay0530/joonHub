const solution = (n) => {
  n = n.toString();
  let answer = 0;
  for (const element of n) {
    answer += parseInt(element);
  }
  return answer;
};