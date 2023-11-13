const solution = (a, b) => {
  if (a === b) return a;
  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }
  let sum = 0;
  for (a; a <= b; a++) {
    sum += a;
  }
  return sum;
};