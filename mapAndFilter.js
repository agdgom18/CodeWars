// Map work each element in the massive
const a = [1, 4, 8, 7, 9, 12, 33];

// map syntax , creat new massive from  const a
let b = a.map((item, index) => {
  // after return all elemenr will be add in new massive
  return item * 3;
});

//  Filter
// return all element which more 7
// filter does not return index

let c = a.filter((item) => {
  if (item > 7) {
    return true; // only true or false
  }
});
console.log(c);
