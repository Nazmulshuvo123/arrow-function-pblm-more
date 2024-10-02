//Display the instructor name that has the position senior using filter 


const instructor = [
    { name: 'Nodi', age: 28, position: 'Senior'},
    { name: 'Akil', age: 26, position: 'Junior'},
    { name: 'Asifa', age: 29, position: 'Senior'},
]
const person = instructor.filter((people) => people.position === 'Senior');
const names = person.map((p) => p.name);
console.log(names);
// console.log(person);