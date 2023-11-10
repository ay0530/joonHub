const solution = (numbers) => {
  let answer = 0;
  numbers.forEach(e => {
    answer += e;
  });
  return (answer / numbers.length);
};