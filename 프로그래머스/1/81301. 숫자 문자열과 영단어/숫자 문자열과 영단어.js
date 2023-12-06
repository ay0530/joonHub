const numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
const solution = s => {
  numArr.forEach((e, idx) => {
    const regex = new RegExp(numArr[idx], 'g');
    s = s.replace(regex, idx);
  });
  return +s;
};