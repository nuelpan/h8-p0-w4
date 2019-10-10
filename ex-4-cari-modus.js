function cariModus(arr) {
  // you can only write your code here!
  var modus = 0;
  var compare = 0;

  for (var i = 0; i < arr.length; i++) {
    var freqCount = 0; // freqCount start from 0, so the initial item won't count as 2
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        freqCount += 1;
      }
    }

    // if freqCount > compare
    // save freqCount as compare, for comparing with next iteration
    // and save current arr[i] as modus, so when no iteration left
    // modus can be returned as result
    if (freqCount > compare) {
      compare = freqCount;
      modus = arr[i];
    }
  }
  console.log(compare);

  // conditional for array of identical number
  // which can be found if compare has the same length with array

  // and if compare === 1 it means no identical number
  if (compare === 1 || compare === arr.length) {
    return -1;
  }

  return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
