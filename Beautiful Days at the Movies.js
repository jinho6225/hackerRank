function beautifulDays(i, j, k) {
  let count = 0;
  while (i <= j) {
    const reversed = i.toString().split('').reverse().join('');
    if ((i - reversed) % k === 0) {
      count++;
    }
    i++;
  }
  return count;
}
