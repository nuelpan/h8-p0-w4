function changeMe(arr) {
  // you can only write your code here!
  var obj = {};
  var age = 0;
  var today = new Date();

  if (arr.length === 0) {
    console.log("");
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][3] === undefined || arr[i][3] > today.getFullYear()) {
      age = "Invalid Birth Year";
    } else {
      age = today.getFullYear() - arr[i][3];
    }

    obj["firstName"] = arr[i][0];
    obj["lastName"] = arr[i][1];
    obj["gender"] = arr[i][2];
    obj["age"] = age;

    console.log(`${i + 1}. ${arr[i][0]} ${arr[i][1]}:`);
    console.log(obj);
  }
}

// TEST CASES
changeMe([["Christ", "Evans", "Male", 1982], ["Robert", "Downey", "Male"]]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
