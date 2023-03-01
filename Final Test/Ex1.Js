function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function calculate() {
    const a = parseInt(document.getElementById("input-a").value);
    const b = parseInt(document.getElementById("input-b").value);
  
    let sum = 0;
    for (let i = a; i <= b; i++) {
      if (isPrime(i)) {
        sum += i;
      }
    }
  
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `The sum of primes between ${a} and ${b} is ${sum}.`;
  }
  