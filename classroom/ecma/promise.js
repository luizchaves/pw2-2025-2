function sum(a, b) {
  return a + b;
}

console.log(sum(1, 1));
console.log(sum(2, 2));
console.log(sum(undefined, 2));

function sumPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return reject(new Error('Invalid arguments'));
    } else {
      return resolve(a + b);
    }
  });
}

console.log(sumPromise(3, 3));
sumPromise(3, 3)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

// sumPromise(3, undefined)
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

sumPromise(4, 4)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

async function sumAsync(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid arguments');
  } else {
    return a + b;
  }
}

console.log(sumAsync(5, 5));

sumAsync(5, 5)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

// sumAsync(5, undefined)
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));


try {
  const result = await sumAsync(6, 6);

  console.log(result);
} catch (error) {
  console.error(error);
}

async function main() {
  try {
    const result = await sumAsync(7, 7);

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

main();
