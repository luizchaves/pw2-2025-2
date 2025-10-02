const values = [1, 2, 3];

console.log(values[1]); // 2
console.log(values.at(-2)); // 2

console.log(values.length); // 3
console.log(values[values.length - 1]); // 3
console.log(values.at(-1)); // 3

// adding elements
console.log(values[3]); // undefined
values[3] = 4;
console.log(values); // [1, 2, 3, 4]

values.push(5);
console.log(values); // [1, 2, 3, 4, 5]

values.unshift(0);
console.log(values); // [0, 1, 2, 3, 4, 5]

values.pop();
console.log(values); // [0, 1, 2, 3, 4]

values.shift();
console.log(values); // [1, 2, 3, 4]

// multiple types
const person = ['Fulano', 25, true, ['fulano@email.com', 'fulano@ifpb.edu.br']];

console.log(person[3][1]);
console.log(person[3].at(-1));
console.log(person.at(-1).at(-1));

// destructuring arrays
// const [name, setName] = useState('');
// const name = person[0];
// const emails = person[3];
const [name, , , emails] = person;

// spread operator
// const student = ['123', person]; // ['123', ['Fulano', 25, true,....]]
const student = ['123', ...person]; // ['123', 'Fulano', 25, true,....]

// loops
console.log(values); // [1, 2, 3, 4]

for (const value of values) {
  console.log(value);
}

for (const index in values) {
  console.log(index, values[index]);
}

for (let i = 0; i < values.length; i++) {
  console.log(i, values[i]);
}

// entries [[0, 1], [1, 2], [2, 3], [3, 4]]
for (const [index, value] of values.entries()) {
  console.log(index, value);
}

values.forEach((value, index) => {
  console.log(index, value);
});

// Array Object
console.log(values); // [1, 2, 3, 4]
console.log(values.concat([5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(values.includes(3)); // true
console.log(values.indexOf(3)); // 2
console.log(values.join()); // "1,2,3,4"
console.log(values.join(' - ')); // "1 - 2 - 3 - 4"
console.log(values.reverse()); // [4, 3, 2, 1]
console.log(values.slice(1, 3)); // [2, 3]
console.log([1, 20, 10, 2].sort()); // [1, 10, 2, 20]
console.log([1, 20, 10, 2].sort((a, b) => a - b)); // [1, 2, 10, 20]

// functional programming
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.map((n) => n * 2)); // [2, 4, 6, 8, 10]
console.log(numbers);

const doubleValues = (n) => n * 2;
console.log(numbers.map(doubleValues)); // [2, 4, 6, 8, 10]

console.log([1, 2, 3, 4, 5].map(function (n, i, a) {
  return n * 2;
}));

Array.prototype.myMap = function (callback) {
  const array = this;
  const result = [];
  for (const [index, value] of array.entries()) {
    result.push(callback(value, index, array));
  }
  return result;
}

console.log(numbers.myMap(doubleValues)); // [2, 4, 6, 8, 10]

console.log(numbers.filter((n) => n & 1)); // [1, 3, 5]
console.log(numbers.filter((n) => n > 10)); // []
console.log(numbers.filter((n) => n > 0)); // [1, 2, 3, 4, 5]

console.log(numbers.reduce((acc, n) => acc + n, 0)); // 15
// acc | n | acc + n
//  0  | 1 |   1
//  1  | 2 |   3
//  3  | 3 |   6
//  6  | 4 |   10
// 10  | 5 |   15
console.log(numbers.reduce((acc, n) => {
  return acc + n
})); // 15
// acc | n | acc + n
//  1  | 2 |   3
//  3  | 3 |   6
//  6  | 4 |   10
// 10  | 5 |   15
console.log(numbers.reduce((acc, n) => acc * n, 1)); // 120

console.log(numbers.some((n) => n > 3)); // true
console.log(numbers.every((n) => n > 3)); // false
console.log(numbers.every((n) => n > 0)); // true

const investments = [
  {
    name: 'Tesouro Selic 2028',
    value: 1000,
  },
  {
    name: 'CDB X',
    value: 5000,
  },
];

console.log(investments.find((inv) => inv.name === 'CDB X')); // { name: 'CDB X', value: 5000 }

const { value } = investments.find((inv) => inv.name === 'CDB X');
const index = investments.findIndex((inv) => inv.name === 'CDB X');
investments.splice(index, 1);
investments.filter((inv, i) => index !== i);
investments.filter((inv) => inv.name !== 'CDB X');
