const mapArray = function (array) {
  let numbers = new Array(array.length);
  for (let i = 0; i < array.length; i += 1) {
    numbers[i] = array[i] * 10;
  }
  return numbers;
}
console.log(mapArray([-2, 0, 2]));
console.log(mapArray([-2.5, 0, 2.5]));