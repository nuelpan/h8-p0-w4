function deepSum(arr) {
  // Code disini
  var hasil = 0;
  if (arr.length === 0) {
    return "No number";
  }
  for (var wow = 0; wow < arr.length; wow++) {
    for (var dalem = 0; dalem < arr[wow].length; dalem++) {
      for (var bgt = 0; bgt < arr[wow][dalem].length; bgt++) {
        hasil += arr[wow][dalem][bgt];
      }
    }
  }
  return hasil;
}

//TEST CASE
console.log(
  deepSum([
    [[4, 5, 6], [9, 1, 2, 10], [9, 4, 3]],
    [[4, 14, 31], [9, 10, 18, 12, 20], [1, 4, 90]],
    [[2, 5, 10], [3, 4, 5], [2, 4, 5, 10]]
  ])
); // 316

console.log(
  deepSum([
    [[20, 10], [15], [1, 1]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]],
    [[3, 5, 1], [1, 5, 3], [1]],
    [[2]]
  ])
); // 156

console.log(deepSum([])); // No number
