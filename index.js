const convertBinary = (num) => {
    let currentNum = num
    const binary = [];

    while(currentNum >= 1) {
        if(currentNum % 2 === 0) {
            binary.unshift(0);
            currentNum = Math.floor(currentNum / 2);
            continue;
        }
        binary.unshift(1);
        currentNum = Math.floor(currentNum / 2);
    }

    return binary.join("");
}

const convertToDecimal = (bin) => {
    const base = 2;
    let binArr = [];
    let answer = 0;

    for(let i = 0; i < bin.length; i++) {
        binArr.unshift(base ** i)
    }
    
    for(let i = 0; i < bin.length; i++) {
        if(bin[i] === "1") {
            answer += binArr[i];
            continue;
        }
    }

    return answer;
}

// 128 64 32 16 8 4 2 1
//         1  remainder 24
//            1 remainder 8
//               1 remainder is 0
//          1 1 1 0 0 0
console.log(convertBinary(56));
console.log(convertToDecimal("10101001"));