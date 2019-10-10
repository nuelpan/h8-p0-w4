function urutkanAbjad(str) {
  var arrStr = [];
  var hasil = "";
  //split str
  for (var i = 0; i < str.length; i++) {
    arrStr.push(str[i]);
  }

  // sort str
  for (var i = 0; i < arrStr.length - 1; i++) {
    var temp = "";
    for (var j = 0; j < arrStr.length - 1 - i; j++) {
      if (arrStr[j] > arrStr[j + 1]) {
        temp = arrStr[j + 1];
        arrStr[j + 1] = arrStr[j];
        arrStr[j] = temp;
      }
    }
  }

  // join str
  for (var i = 0; i < arrStr.length; i++) {
    hasil += arrStr[i];
  }
  return hasil;
}

// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'
