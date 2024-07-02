const sumAll = function(firstNum, secondNum) {
    let finalSum = 0;

    if (typeof firstNum !== 'number' || typeof secondNum !== 'number' || isNaN(firstNum) || (firstNum < 0) || isNaN(secondNum) || (secondNum < 0)){
        return 'ERROR';
    }

    if (firstNum < secondNum) {
  
        for (let i = firstNum; i <= secondNum; i++) {
            finalSum += i;
        }
    } else if (firstNum > secondNum) {
       
        for (let i = firstNum; i >= secondNum; i--) {
            finalSum += i;
        }
    } 
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
