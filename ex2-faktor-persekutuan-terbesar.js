function fpb(angka1, angka2) {
  // you can only write your code here!
  var batasAkhir = 0;
  var hasil = 0;
  if (angka1 > angka2) {
    batasAkhir = angka1;
  } else if (angka2 > angka1) {
    batasAkhir = angka2;
  } else {
    batasAkhir = angka1;
  }

  for (var i = 1; i <= batasAkhir; i++) {
    if (angka1 % i === 0 && angka2 % i === 0) {
      hasil = i;
    }
  }
  return hasil;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
