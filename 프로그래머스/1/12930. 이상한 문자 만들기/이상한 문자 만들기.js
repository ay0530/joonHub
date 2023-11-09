function solution(s) {
    let arr = s.split(' '); // 문자열을 공백으로 나눈 후 배열에 저장
    let answer = []; // 대소문자 변환 값을 저장하기 위한 빈 배열

    arr.forEach((element, index) => {
        let word = arr[index]; // arr[인덱스] 값을 wrod에 할당
        // arr[index] 글자 수 만큼 반복 실행
        for (let i = 0; i < word.length; i++) {
            // 반복 횟수가 짝수일 경우 대문자 : 홀수일 경우 소문자로 변환 후 answer 배열에 저장
            i % 2 === 0 ? answer.push(arr[index][i].toUpperCase()) : answer.push(arr[index][i].toLowerCase());
        };
        // 마지막 글자가 아닐 경우 공백 추가
        if (index < arr.length - 1) { answer.push(' '); };
    });

    answer = answer.join(''); // 배열.join('')을 사용하여 공백 없이 문자열로 변환
    return answer;
}