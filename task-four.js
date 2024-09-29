// You have an odd array .[1, 3, 5, 7, 9]. Now convert this array into an even array. Do this using "for loop" & "array.map()" method.
//Hints: add one to any odd number and it will become an even number.

const numbers = [1, 3, 5, 7, 9];
let evenNumArray = [];
for(const num of numbers){
    // console.log(num);
    let even = num + 1;
    // console.log(even);
    evenNumArray.push(even);
}
console.log(evenNumArray);

const evenArray = numbers.map(number => number + 1);

console.log(evenArray);

