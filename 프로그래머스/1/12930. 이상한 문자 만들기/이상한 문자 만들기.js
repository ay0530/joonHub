function solution(s) {
    let arr = s.split(' ');
    let answer = [];

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        for (let j = 0; j < word.length; j++) {
            j % 2 === 0 ? answer.push(arr[i][j].toUpperCase()) : answer.push(arr[i][j].toLowerCase());
        };
        if (i < arr.length - 1) { answer.push(' '); };
    };

    answer = answer.join('');
    return answer;
}