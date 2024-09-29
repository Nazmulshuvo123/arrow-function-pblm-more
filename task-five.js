//You have an given array: [33, 50, 79, 78, 90, 101, 30]. Now return or get all the elements which are divisible by 10 using "array.filter()" method. And do same task using "array.find()" method.

const array = [33, 50, 79, 78, 90, 101, 30];

const evenNumber = array.filter(num => num % 2 === 0); // Given all even number from an array
console.log(evenNumber);

const evenNumber2 = array.find(num => num % 2 === 0); // Given first even number from an array
console.log(evenNumber2)