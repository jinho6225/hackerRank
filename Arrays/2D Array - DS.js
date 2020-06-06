function hourglassSum(arr) {
  let max =
    arr[0][0] +
    arr[0][1] +
    arr[0][2] +
    arr[1][1] +
    arr[2][0] +
    arr[2][1] +
    arr[2][2];
  for (let i = 2; i < arr.length; i++) {
    for (let j = 2; j < arr[i].length; j++) {
      let sum = 0;
      if (i >= 2 && j >= 2) {
        sum =
          sum +
          arr[i - 2][j - 2] +
          arr[i - 2][j - 1] +
          arr[i - 2][j] +
          arr[i - 1][j - 1] +
          arr[i][j - 2] +
          arr[i][j - 1] +
          arr[i][j];
        if (sum > max) max = sum;
      } else {
        continue;
      }
    }
  }
  return max;
}
