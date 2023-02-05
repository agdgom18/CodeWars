const arr = [1, 2, 2, 4, 5, 3, 6, 7, 8, 9, 4];

// 1 SET

const a1 = [...new Set(arr)]; //massive version 1
// const a1 = Array.from(new Set(arr));  massive version 2
console.log(a1);

// 2 filter
/*
There is an initial array. Using filter I get each element which I compare with index, I do it with method indexOf which goes through elements first and writes only unique values
*/
let a2 = arr.filter((item, index) => {
  return arr.indexOf(item) === index; //  !== we return duplice array
});

// 3
