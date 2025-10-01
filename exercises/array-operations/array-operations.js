export function sum(array) {
  // if (!array.length) {
  //   return NaN;
  // }

  // let total = 0;

  // for (const value of array) {
  //   total += value;
  // }

  // return total;
  // return array.length && array.reduce((acc, curr) => acc + curr, 0);
  return array.length ? array.reduce((acc, curr) => acc + curr, 0) : NaN;
}

export function product(array) {
  // if (!array.length) {
  //   return NaN;
  // }

  // let total = 1;

  // for (const value of array) {
  //   total *= value;
  // }

  // return total;
  return array.length ? array.reduce((acc, curr) => acc * curr) : NaN;
}

export function sumOdds(array) {
  // if (!array.length) {
  //   return NaN;
  // }

  // let total = 0;

  // for (const value of array) {
  //   if (value & 1) {
  //     total += value;
  //   }
  // }

  // return total;
  return array.length
    ? array
      .filer((n) => n & 1)
      .reduce((acc, curr) => acc + curr, 0)
    : NaN;
}
