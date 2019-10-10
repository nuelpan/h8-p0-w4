function ubahHuruf(kata) {
  // you can only write your code here!
  var str = "abcdefghijklmnopqrstuvwxyz";
  var hasil = "";
  for (var i = 0; i < kata.length; i++) {
    for (var j = 0; j < str.length; j++) {
      if (kata[i] !== "z" && kata[i] === str[j]) {
        hasil += str[j + 1];
      } else if (kata[i] === "z" && kata[i] === str[j]) {
        hasil += str[0];
      }
    }
  }
  return hasil;
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
