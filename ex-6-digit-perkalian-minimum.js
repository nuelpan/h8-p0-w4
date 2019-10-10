function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var bil2 = 0;
  var dpm = [];

  // cari angka perkalian, dan gabungkan sebagai string
  // kemudian push ke array dpm untuk dicari length terkecilnya
  // var i dimulai dari satu sehingga angka satu bisa dicari dpm nya
  for (var i = 1; i <= angka; i++) {
    if (angka % i === 0) {
      bil2 = angka / i;
      dpm.push(String(bil2) + String(i));
    }
  }

  // sort dpm sehingga yang length nya paling kecil ada di index 0
  // dan return dpm[0].length sebagai hasil
  for (var i = 0; i < dpm.length - 1; i++) {
    var temp = "";
    for (var j = 0; j < dpm.length - 1 - i; j++) {
      if (Number(dpm[j]) > Number(dpm[j + 1])) {
        temp = dpm[j + 1];
        dpm[j + 1] = dpm[j];
        dpm[j] = temp;
      }
    }
  }
  return dpm[0].length;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
