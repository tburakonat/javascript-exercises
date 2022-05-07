const sumAll = function(start, end) {
    let sum = 0
    if (start < 0 || end < 0 || typeof(start) !== "number"  || typeof(end) !== "number" ) {
        return "ERROR"
    } else if (start > end) {
        [start, end] = [end, start]
        console.log("Start", start)
        console.log("End", end)
    } 
    for (let i = start; i <= end; i++) {
       sum = sum + i 
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
