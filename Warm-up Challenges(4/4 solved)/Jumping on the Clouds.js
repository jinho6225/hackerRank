function jumpingOnClouds(c) {
  let total = 0;
  //will count whenever move
  let i = 0;
  while (i < c.length - 1) {
    if (c[i + 2] === 1) {
      i++;
      total++;
    } else if (c[i + 1] === 1) {
      i += 2;
      total++;
    } else {
      i += 2;
      total++;
    }
  }
  return total;
}
