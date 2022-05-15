const fibonacci = function(input) {
    let num = parseInt(input)
    if (num < 1) return `OOPS`
    let oldFibo = 0
    let newFibo = 1
    let temp
    for (let i = 0; i < num; i++) {
        temp = newFibo
        newFibo = oldFibo + newFibo
        oldFibo = temp
    }
    return oldFibo
};

// Do not edit below this line
module.exports = fibonacci;
