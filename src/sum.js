let sum = (function() {
  let sum = 0;

  return function (n) {
    if(!n) {
      return sum
    }

    sum += n;
  }
})();

sum(10);
sum(10);
sum(10);
sum(10);
sum(10);
sum(10);
console.log(sum());

