function task(number) {
  console.log(`-----task ${number}------`);
}

function isArrayLengthOdd(numbers) {
  let array = numbers.length;
  if (array % 2 == 0) {
    return false;
  } else {
    return true;
  }
}
task(1);
console.log(isArrayLengthOdd([1, 2, 3, 4]));

function isArrayLengthEven(numbers) {
  let array = numbers.length;
  if (array % 2 == 1) {
    return false;
  } else {
    return true;
  }
}
task(2);
console.log(isArrayLengthEven([1, 2, 3, 4]));

function addLailaToArray(instructors) {
  instructors.push("Laila");
  return instructors;
}
task(3);
console.log(addLailaToArray(["Mshary", "Hasan"]));

function eliminateTeam(teams) {
  console.log(teams.pop());
}
task(4);
eliminateTeam(["Brazil", "Germany", "Italy", "kuwait"]);

/*function secondHalfOfArrayIfItIsEven(fruits) {
let leng = fruits.length()
if (leng %2 ===0 ){
console.log(fruits.slice(2,4))
}else{
  return fruits.map()
}
console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]))

}*/
function secondHalfOfArrayIfItIsEven(fruits) {
  let leng = fruits.length; // Access length property, not method
  
  if (leng % 2 === 0) { // Use strict equality operator
      // Get the second half of the array
      return fruits.slice(leng / 2); // Slice from the midpoint to the end
  } else {
      // If the length is odd, simply return the original array or handle it appropriately
      return fruits; // Return the original array or some other value
  }
}

// Call the function and log the result
console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]));
