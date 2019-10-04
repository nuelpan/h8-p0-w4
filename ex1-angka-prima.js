function angkaPrima(num) {
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else if (num > 2) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return "false";
      }
    }
    return "true";
  }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
