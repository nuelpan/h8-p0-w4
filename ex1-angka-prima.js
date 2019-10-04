function isItPrime(num) {
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else if (num > 2) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return "bukan prima";
      }
    }
    return "prima";
  }
}

console.log(isItPrime(14));
console.log(isItPrime(3));
console.log(isItPrime(140));
