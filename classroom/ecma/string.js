// String (', ", `)
console.log('Hello');
console.log("Hello");
console.log(`Hello`);

const string = 'hello, world!';
console.log(string[0]); // h
console.log(string.charAt(0)); // h
string[0] = 'H'; // does not change the string
console.log(string[0].toLocaleUpperCase() + string.slice(1)); // Hello, world!

// escape characters
console.log('I\'m "Fulano"');
console.log("I'm \"Fulano\"");
console.log(`I'm "Fulano"`);

// special characters
console.log('Line 1\nLine 2');
console.log('Column 1\tColumn 2');
console.log('Backslash \\');

// Concat (+)
const name = 'Fulano';
const email = 'fulano@email.com';

// Template literals / Template strings
// multi-line strings
// string interpolation
console.log('<tr><td>' + name + '</td><td>' + email + '</td></tr>');
console.log(
  `<tr>
    <td>${name}</td>
    <td>${email}</td>
  </tr>`
);

// String Object
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.charAt(0));
console.log(name.indexOf('u'));
console.log(name.lastIndexOf('a'));
console.log(name.slice(0, 3));
console.log(name.split(''));
console.log(name.split('a'));

const authorization = 'Bearer asdfghjklqwertyuiopzxcvbnm';
const [, token] = authorization.split(' ');
console.log(token); // asdfghjklqwertyuiopzxcvbnm
