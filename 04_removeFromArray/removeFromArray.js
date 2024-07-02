const removeFromArray = function(array, ...removedNum) {
    return array.filter((number) => {
        return !removedNum.includes(number);
    });
};

// Do not edit below this line
module.exports = removeFromArray;
