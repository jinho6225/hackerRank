// Complete the rotLeft function below.
function rotLeft(a, d) {
  if (a.length < d) {
    d = d % a.length;
  }
  let arr = [],
    i = d;
  while (i > 0) {
    arr.push(a.shift());
    i--;
  }
  a = a.concat(arr);
  return a;
}
