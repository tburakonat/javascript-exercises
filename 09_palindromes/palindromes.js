const palindromes = function (input) {
    const cleanedInput = input.toLowerCase().replace(/[^a-z]/g, "")
    const reversedInput = cleanedInput.split("").reverse().join("")
    return cleanedInput === reversedInput
};

// Do not edit below this line
module.exports = palindromes;
