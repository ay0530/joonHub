const solution = (s) => {
  let cntZero = 0;
  let cnt = 0;
  // 값이 1이 되었을 때 멈추기
  while (s != 1) {
    for (const e of s) {
      if (e == 0) {
        cntZero++;  // 다시 0을 세서 어디에 저장시키기
      }
    }
    s = s.replace(/0/g, ''); // 0 제거
    s = s.length.toString(2); // x를 다시 2진수로 변환
    cnt++;
  }
  return [cnt, cntZero];
};