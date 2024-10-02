// Follow above array of object. So you have three object as array element. Can you find out the sum form here. What are the thinking ? Do for loop  and also use array.reduce() method.
const people = [
    { name: 'Nodi', age: 28 },
    { name: 'Akil', age: 26 },
    { name: 'Asifa', age: 29 },
]
let sum = 0;
for(const item of people){
    // console.log(item.age);
    sum += item.age;
}
console.log(sum);

const total = people.map((person) => person.age).reduce((previous, current) => previous + current, 0)

console.log(total)