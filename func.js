// random number
// const min = 100;
// const max = 200;
// function randomNumber() {
//   let rand = Math.floor(min + Math.random() * (max + 1 - min));
//   console.log(rand);
// }
// randomNumber();

// argument
//  ! without massive
// function showSumAll(...args) {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//   console.log(sum);
// }
// showSumAll(3, 45, 6);

/// ! when massive
// function showSumAll2(...args) {
//   let sum = args.reduce((accum, item) => (accum += item));
//   console.log(sum);
// }
// showSumAll2(4, 5, 6, 7, 8, 5, 9, 4);

// ! argument like fucntion
// function outputToConsole(num, drawFunction) {
//   console.log(drawFunction(num));
// }
// function showNum(num) {
//   return num ** 2;
// }
// function showNum2(num) {
//   return num * 245;
// }
// outputToConsole(25, showNum2);

// !return in fucntions
