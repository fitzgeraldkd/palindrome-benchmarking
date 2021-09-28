function isPalindromeOption1(word) {
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - i - 1]) {
            return false;
        }
    }
    return true;
}

function isPalindromeOption2(word) {
    const firstHalf = word.slice(0, Math.floor(word.length/2));
    const secondHalf = word.slice(Math.ceil(word.length / 2));
    if (firstHalf === secondHalf.split('').reverse().join('')) {
      return true;
    }
    else {
      return false;
    }
}

function isPalindromeRecursive(word) {
    if (word.length <= 1) {
        return true;
    } else if (word[0] === word.slice(-1)) {
        return isPalindromeRecursive(word.slice(1, -1));
    } else {
        return false;
    }
}

// GENERATE TESTS

const availableCharacters = "abcdefghijklmnopqrstuvwxyz";

function testGenerator(quantity, minLength, maxLength) {
    const tests = [];
    for (let i = 0; i < quantity; i++) {
        const length = randomInt(minLength, maxLength);
        if (Math.random() < 0.5) {
            let thisStr = testGenerateRandom(length);
            // ensure it is not a palindrome
            if (length > 1) {
                let middle;
                if (length % 2 === 0) {
                    middle = 'ab';
                } else {
                    middle = 'abc';
                }
                thisStr = thisStr.slice(0, Math.floor(length/2)-1) + middle + thisStr.slice(Math.ceil(length/2)+1);
            }
            tests.push({input: thisStr, output: length>1?false:true});
        } else {
            let thisStr = testGeneratePalindrome(length)
            tests.push({input: thisStr, output: true});
        }
    }
    return tests;
}

function testGeneratePalindrome(length) {
    let half = testGenerateRandom(Math.floor(length / 2));
    let newStr = half;
    if (length % 2 === 1) {
        newStr += "a"; // it doesn't matter what this character is
    }
    newStr += half.split('').reverse().join('');
    return newStr;
}

function testGenerateRandom(length) {
    let newStr = "";
    while (newStr.length < length) {
        newStr += availableCharacters.charAt(randomInt(0, availableCharacters.length - 1));
    }
    return newStr;
}

function randomInt(min, max) {
    return Math.random() * (max - min) + min;
}

const testsToRun = {
    algorithms: [
        {name: "String Loop", funcReference: isPalindromeOption1},
        {name: "String Split/Reverse", funcReference: isPalindromeOption2},
        {name: "Recursive", funcReference: isPalindromeRecursive}
    ],
    tests: testGenerator(3000, 3, 10000)
}

module.exports = testsToRun;