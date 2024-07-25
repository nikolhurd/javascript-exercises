const palindromes = (string) => {
  let cleanString = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversed = cleanString.split("").reverse().join("");
  console.log(reversed);
  if (cleanString === reversed) {
    return true;
  } else {
    return false;
  }
};

console.log(palindromes("ZZZZ car, a man, a maracaz."));

// Do not edit below this line
module.exports = palindromes;
