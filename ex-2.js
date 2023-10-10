// //Exercise #2: At Least Five Function



// const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
// const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
// const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// function atLeastFive(array, operation) {

//   for ( let i = 0 ; i < array.length ; i++) {
//     let room1 = operation(array[i] >= 70)
//     scoreRoom1Result.push(room1)
    
    
//   }
    
//   // คิดว่าน่าจะต้องใช้ For Loop ในการหาคนที่คะแนนเกิน 70 อย่างน้อย 5 คน (>=5) ต่อ 1 ห้อง
//   // ต้องใช้ call back ด้วย 
//   // Start coding here
// }

// function Over70room1 (morethan70){
//   return true
// }


// atLeastFive(studentScoresRoom1,Over70room1)

// console.log(scoreRoom1Result)
// // ต้องมี การ push Value เข้าไปใน Assign Variable ข้างล่างนี้


// let scoreRoom2Result;
// let scoreRoom3Result;

//ChatGPT Explain

function atLeastFive(array, operation) {
  const count = array.filter(score => score > 70).length;
  return operation === ">=5" ? count >= 5 : count;
}
//`atLeastFive` is a function that takes two parameters: `array` (an array of student scores) and `operation` (a string indicating the type of comparison operation).

//`array.filter(score => score > 70)` filters the scores in the array, keeping only those that are greater than 70. `.length` calculates the number of scores that are greater than 70.

//`return operation === ">=5" ? count >= 5 : count;` checks the provided operation. If the operation is ">=5", it returns `true` if the count of scores greater than 70 is 5 or more, otherwise `false`. If the operation is anything else (not ">=5"), it returns the count of scores greater than 70.
//----------//

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

//----------//

let scoreRoom1Result = atLeastFive(studentScoresRoom1, ">=5") ? 'true' : 'false';
let scoreRoom2Result = atLeastFive(studentScoresRoom2, ">=5") ? 'true' : 'false';
let scoreRoom3Result = atLeastFive(studentScoresRoom3, ">=5") ? 'true' : 'false';

//2. Checking Each Room's Scores://
//`atLeastFive(studentScoresRoom1, ">=5")` checks if there are at least 5 scores greater than 70 in `studentScoresRoom1` array. If true, `scoreRoom1Result` is set to 'true'; otherwise, it's set to 'false'. The same logic applies to `studentScoresRoom2` and `studentScoresRoom3`.
//---------//


console.log("Room 1:", scoreRoom1Result);
console.log("Room 2:", scoreRoom2Result);
console.log("Room 3:", scoreRoom3Result);
//3.Printing the Results:
//For each room, the code checks if there are at least 5 students with scores greater than 70 and prints `true` or `false` accordingly.