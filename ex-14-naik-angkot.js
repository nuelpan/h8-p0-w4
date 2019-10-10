function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  //your code here
  var hasil = [];
  for (var i = 0; i < arrPenumpang.length; i++) {
    var indexNaik = 0;
    var indexTujuan = 0;
    var bayar = 0;

    for (var j = 0; j < rute.length; j++) {
      if (arrPenumpang[i][1] === rute[j]) {
        indexNaik = j;
      } else if (arrPenumpang[i][2] === rute[j]) {
        indexTujuan = j;
      }
    }
    bayar = (indexTujuan - indexNaik) * 2000;

    var tempObj = {};
    tempObj["penumpang"] = arrPenumpang[i][0];
    tempObj["naikDari"] = arrPenumpang[i][1];
    tempObj["tujuan"] = arrPenumpang[i][2];
    tempObj["bayar"] = bayar;

    hasil.push(tempObj);
  }
  return hasil;
}

//TEST CASE
console.log(naikAngkot([["Dimitri", "B", "F"], ["Icha", "A", "B"]]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
