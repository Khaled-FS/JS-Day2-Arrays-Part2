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
