export function sum(array) {
  if (!array.length) {
    return NaN;
  }

  let total = 0;

  for (const value of array) {
    total += value;
  }

  return total;
}

export function product(array) {
  if (!array.length) {
    return NaN;
  }

  let total = 1;

  for (const value of array) {
    total *= value;
  }

  return total;
}

export function sumOdds(array) {
  if (!array.length) {
    return NaN;
  }

  let total = 0;

  for (const value of array) {
    if (value & 1) {
      total += value;
    }
  }

  return total;
}
