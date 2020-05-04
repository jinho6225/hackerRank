function viralAdvertising(n) {
  let result = 0;
  let liked = 0;
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      liked = liked + Math.floor(5 / 2);
      result = liked;
    } else {
      liked = Math.floor((liked * 3) / 2);
      result = result + liked;
    }
  }
  return result;
}

viralAdvertising(5)
