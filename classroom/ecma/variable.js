// var, let, const
const number = 10;

// 'const' declarations must be initialized.
// const value;
// value = 20;

// TypeError: Assignment to constant variable.
number = 20;
console.log(number);

const person = { name: 'Fulano' };
person.name = 'Ciclano';
console.log(person);

let value;
console.log(value); // undefined
value = 20;
