// Filtration Task for Problem Solving BootCamp
// Write a Function that take 2 integergers (n,m) then print all prime numbers between them
// Note: you can implement the task with any language you prefer like (c++,dart,js)
// Input
// The input consists of two integers n and m (1≤n≤1000000) and n always less than m
// Output
// Print all prime numbers
// Examples
// Input: 5 10
// output : 7
// Input: 7 20
// Output:9 11 13 17 19

//solution
//1- create a function that take two parameter
//2- create the range of numbers that want to log the nums inside this range
//3-create a fun that check if this num is prime or not
//3= log the primary nums inside this range
// n==> for start m==> for the end
function LoggingPrimaryNums(n, m) {
  for (let i = n; i <= m; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
    return true;
  }
}
LoggingPrimaryNums(7, 20);
