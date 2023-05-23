// flat
const array = [1,2,3,4,[5,6,7,[8,9,10]]];
console.log(array.flat());
console.log(array.flat(2));

// flat-Map

const array2 = [1, 2, 3, 4];
console.log(array2.map(n => [n * 2]));
console.log(array2.flatMap(n  => [n * 2]));

