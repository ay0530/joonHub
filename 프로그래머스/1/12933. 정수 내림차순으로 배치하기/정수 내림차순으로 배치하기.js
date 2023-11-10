const solution = n => {
  n = String(n).split('');
  n.sort((a, b) => b - a);
  return Number(n.join(''));
};