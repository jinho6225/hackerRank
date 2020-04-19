function saveThePrisoner(n, m, s) {
  m = m % n;
  let answer;
  if (m + s > n) {
    answer = ((s + m) % n) - 1;
  } else {
    answer = s + m - 1;
  }
  if (answer === 0) {
    return n;
  } else {
    return answer;
  }
}
