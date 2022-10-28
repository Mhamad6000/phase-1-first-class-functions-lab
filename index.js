// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
  return array.filter((element, index) => {
    return index < 2;
  });
};
const returnLastTwoDrivers = (array) => {
  return array.filter((element, index, array) => {
    return index >= array.length - 2;
  });
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(int) {
  return (num) => {
    return num * num;
  };
}
const arg = createFareMultiplier(5);
function fareDoubler(arg) {
  return arg * 2;
}
function fareTripler(arg) {
  return arg * 3;
}
function selectDifferentDrivers(arrayOfDrivers, func) {
  return func(arrayOfDrivers);
}
returnFirstTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"]);
returnLastTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"]);
