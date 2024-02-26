function solution(phone_number) {
  let phoneNumber = '';
  for (let i = 0; i < phone_number.length; i++) {
    const number = i < phone_number.length - 4 ? "*" : phone_number[i];
    phoneNumber += number;
  }
  return phoneNumber;
}