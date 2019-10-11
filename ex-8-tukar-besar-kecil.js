function tukarBesarKecil(kalimat) {
  // you can only write your code here!

  // split to 2 var of alphabet to minimize the loop
  var strKecil = "abcdefghijklmnopqrstuvwxyz";
  var strBesar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var hasil = "";

  for (var i = 0; i < kalimat.length; i++) {
    // in javascript all string are encoded using UTF-16
    // so we can manually filter the str that not a-zA-z
    if (
      kalimat[i] < "A" ||
      (kalimat[i] > "Z" && kalimat[i] < "a") ||
      kalimat[i] > "z"
    ) {
      hasil += kalimat[i];
    }

    for (var j = 0; j < strKecil.length; j++) {
      if (kalimat[i] === strKecil[j]) {
        hasil += strBesar[j];
      } else if (kalimat[i] === strBesar[j]) {
        hasil += strKecil[j];
      }
    }
  }
  return hasil;
}

// TEST CASES
console.log(tukarBesarKecil("Hello World")); // "hELLO wORLD"
console.log(tukarBesarKecil("I aM aLAY")); // "i Am Alay"
console.log(tukarBesarKecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil("IT sHOULD bE me")); // "it Should Be ME"
console.log(tukarBesarKecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"
