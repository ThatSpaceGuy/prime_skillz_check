// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1
var checkz = 0;

for (var i = 0; i < 5; i++) {
  checkz++;
}

// 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2

// Note from Luis - now I'm just being a "stickler", but technically these
// instructions say to "decrease" by "-2"... not "decrease by 2", so I'm going
// to be literal about it... sorry!

var checkpoint = checkz;
var goal = checkz-(-2*3);

while (checkz<goal) {
  checkz -= -2;
}

console.log('The value of checkz after a literal interpretation:', checkz);

// And if you want to see it the other way...
checkz = checkpoint;
goal = checkz+(-2*3);

while (checkz>goal) {
  checkz -= 2;
}

console.log('The value of checkz after a generous interpretation:', checkz);
