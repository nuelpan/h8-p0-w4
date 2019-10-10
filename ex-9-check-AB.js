function checkAB(num) {
  // you can only write your code here!
  // cek kedepan kalau ada lawan main
  var temp;
  for (var i = 0; i < num.length; i++) {
    if (num[i] === "a" && (num[i - 4] === "b" || num[i + 4] === "b")) {
      return true;
    } else {
      temp = false;
    }
  }
  if (temp === false) {
    return false;
  }
}

// TEST CASES
console.log(checkAB("lane borrowed")); // true
console.log(checkAB("i am sick")); // false
console.log(checkAB("you are boring")); // true
console.log(checkAB("barbarian")); // true
console.log(checkAB("bacon and meat")); // false
