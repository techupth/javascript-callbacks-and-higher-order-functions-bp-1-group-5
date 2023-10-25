//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (operation(array[i])) {
      count++;
      if (count >= 5) {
        return true;
      }
    }
  }
  return false;
}

function checkPoint(point) {
  return point > 70;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkPoint);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkPoint);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, checkPoint);
console.log("Room 1: " + scoreRoom1Result);
console.log("Room 2: " + scoreRoom2Result);
console.log("Room 3: " + scoreRoom3Result);
