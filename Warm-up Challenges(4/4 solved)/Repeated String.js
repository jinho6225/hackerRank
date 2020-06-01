function repeatedString(s, n) {
  let aCount = s.length - s.split('a').join('').length;
  let many = Math.floor(n / s.length);

  let bal = n % s.length;
  let count = 0;
  if (bal) {
    let i = 0;
    while (bal > i) {
      if (s[i] === 'a') count++;
      i++;
    }
  }
  return many * aCount + count;
}
