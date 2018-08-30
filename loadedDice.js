function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var trackIndex = 0;

  return function() {
    if (trackIndex === 10){
      trackIndex = 1;

    } else if (trackIndex < 10) {
      trackIndex += 1;
    }

  return list[trackIndex -1];

  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 1
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 2
console.log(rollLoadedDie());  // 3
console.log(rollLoadedDie());  // 3
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 5? yup. we can roll the die infinite times.



