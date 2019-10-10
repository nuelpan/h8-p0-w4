function cariMedian(arr) {
  var tengah = 0;
  // sort dulu pake insertion sort, baru cari median
  for (i = 1; i < arr.length; i++) {
    temp = arr[i]; // masukin item sekarang ke temp untuk di cek
    var j = i - 1; // buat nyimpan index j untuk loop ke belakang
    // ini untuk loop ke belakang dari index j (angka sebelah arr[i])
    while (temp < arr[j] && j >= 0) {
      arr[j + 1] = arr[j];
      j--; // ini untuk iterasi kebelakang
    }
    arr[j + 1] = temp;
  }

  if (arr.length % 2 !== 0) {
    tengah = (arr.length - 1) / 2;
    tengah = arr[tengah];
  } else {
    tengah = Math.floor((arr.length - 1) / 2);
    tengah = (arr[tengah] + arr[tengah + 1]) / 2;
  }
  return tengah;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
