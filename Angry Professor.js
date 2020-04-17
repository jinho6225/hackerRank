function angryProfessor(k, a) {
  let count = 0;
  const arr = a.filter((el) => {
    return el <= 0;
  });
  if (arr.length >= k) {
    return 'NO';
  } else {
    return 'YES';
  }
}
