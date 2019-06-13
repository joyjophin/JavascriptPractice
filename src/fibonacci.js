// 0 1 1 2 3 5 8 13

function fib(n){
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1])
  }
 return arr
}

function fibrec(n) {
  if (n < 2) {
    return 1;
  }

  return fibrec(n - 1) + fibrec(n - 2);
}

function main() {
  let result = [];
  for (let i = 0; i < 10; i++) {
    result.push(fibrec(i))
  }

  console.log(result);
}

main();