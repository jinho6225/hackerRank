function countingValleys(n, s) {
  let count = 0;
  let sum = 0;
  let arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'U') {
      if (sum === -1) {
        count++;
      }
      sum += 1;
    } else if (arr[i] === 'D') {
      sum -= 1;
    }
  }
  return count;
}
