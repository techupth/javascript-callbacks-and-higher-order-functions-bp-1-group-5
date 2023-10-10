// Exercise #1: For Each Function



const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here

function forEach(array, operation) {
  // Start coding here
  for (let i = 0 ; i < array.length ; i ++) {
    // Call the operation (callback) with each element and add 5000
    const newSalary = operation(array[i] + 5000)
    // Push the new salary to the newEmployeeSalaries array
    newEmployeeSalaries.push(newSalary)
  }

}
// Callback function to add 5000 to the salary
function add5000(salary) {
  return salary;
}

// Call the custom forEach function with employeeSalaries and the add5000 callback
forEach(employeeSalaries, add5000);
console.log(newEmployeeSalaries); 

