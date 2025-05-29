function filter(numbers, callback) {
  let results = [];
  for (const number of numbers) {
    if (callback(number)) {
      results.push(number);
    }
  }
  return results;
}

let numbers = [1, 2, 4, 7, 3, 5, 6];
let odd=(number) => number % 2 != 0;
let oddNumbers = filter(numbers,odd);

console.log(oddNumbers);