var arr = [
  [-1, 1, -1, 0, 0, 0],
  [0, -1, 0, 0, 0, 0],
  [-1, -1, -1, 0, 0, 0],
  [0, -9, 2, -4, -4, 0],
  [-7, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0],
];

function maxSumOfHourglasses(arr) {
  var max = null;
  for (var i = 0; i < arr.length - 2; i++) {
    for (var j = 0; j < arr[i].length - 2; j++) {
      var sum = helper(arr, i, j);
      if (max === 0) {
        max = sum;
      }
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
}
function helper(arr, i, j) {
  var total = 0;
  total += arr[i][j];
  total += arr[i][j + 1];
  total += arr[i][j + 2];
  total += arr[i + 1][j + 1];
  total += arr[i + 2][j];
  total += arr[i + 2][j + 1];
  total += arr[i + 2][j + 2];
  return total;
}
console.log(maxSumOfHourglasses(arr));
