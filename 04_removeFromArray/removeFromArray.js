const removeFromArray = function(...params) {
    const array = params[0]
    return array.filter(item => !params.includes(item))
}

// Do not edit below this line
module.exports = removeFromArray;
