// Complete the checkMagazine function below.
//this is faster
function checkMagazine(magazine, note) {
  let map = {};
  for (let i = 0; i < magazine.length; i++) {
    if (!map[magazine[i]]) {
      map[magazine[i]] = 1;
    } else {
      map[magazine[i]]++;
    }
  }
  for (let i = 0; i < note.length; i++) {
    if (map[note[i]] > 0) {
      map[note[i]]--;
    } else {
      console.log('No');
      return;
    }
  }
  console.log('Yes');
}

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
  for (let i = 0; i < note.length; i++) {
    if (magazine.includes(note[i])) {
      let idx = magazine.indexOf(note[i]);
      magazine.splice(idx, 1);
    } else {
      console.log('No');
      return;
    }
  }
  console.log('Yes');
}
