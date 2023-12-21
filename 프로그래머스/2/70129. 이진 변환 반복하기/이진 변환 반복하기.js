const solution = (s) => {
  let cntZero = 0;
  let cnt = 0;
  // 값이 1이 되었을 때 멈추기
  while (s != 1) {
    for (const e of s) {
      e == 0 ? cntZero++ : '';
    }
    s = s.replace(/0/g, '').length.toString(2); // 0 제거 g후 다시 2진수로 변환
    cnt++;
  }
  return [cnt, cntZero];
};