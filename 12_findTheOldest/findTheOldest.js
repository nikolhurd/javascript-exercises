const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (array) {
  return array.reduce((oldest, person) => {
    if (person.yearOfDeath === undefined) {
      person.yearOfDeath = new Date().getFullYear();
    }
    const currAge = person.yearOfDeath - person.yearOfBirth;
    const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    if (currAge > oldestAge) {
      return person;
    }
    return oldest;
  }, array[0]);
};

console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
