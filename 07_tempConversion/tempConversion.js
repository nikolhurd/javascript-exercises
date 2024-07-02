const convertToCelsius = function(num) {
    let finalNum = 0;
    let roundedNum = 0;
    finalNum = (num - 32) * (5/9);
    roundedNum = Math.round(finalNum * 10) / 10;
    return roundedNum;
};

const convertToFahrenheit = function(num) {
  let finalNum = 0;
  let roundedNum = 0;
  finalNum = (num * (9/5)) + 32;
  roundedNum = Math.round(finalNum * 10) / 10;
  return roundedNum;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
