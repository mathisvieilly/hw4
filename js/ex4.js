const values = [3, 11, 7, 2, 9, 10];

const sum = function (array) {
  let total = 0;
  for (const value of array) {
    total += value;
  }
  return total;
}

console.log(sum(values));
console.log(Math.min(...values));
console.log(Math.max(...values));