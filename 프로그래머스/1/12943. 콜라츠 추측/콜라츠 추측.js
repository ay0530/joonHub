const solution = n => {
  if (n === 1) return 0;
  let count = 0;
  while (count < 500) {
    count++;
    n % 2 === 0 && n !== 1 ? n = n / 2 : n = n * 3 + 1;
    if (n === 1) return count;
  };
  return -1;
};