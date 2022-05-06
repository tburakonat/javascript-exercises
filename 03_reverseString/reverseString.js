const reverseString = function(string) {
    const stringArray = string.split("")
    const reversedArray = []
    for (let i = 0; stringArray.length; i++) {
        const letter = stringArray.shift()
        reversedArray.unshift(letter)
    }
    return reversedArray.join("")
}

// Do not edit below this line
module.exports = reverseString;
