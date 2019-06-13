let arrA = [1, 2 ,3, 1, 3, 2, 10];
let arrB = [3, 10, 7, 8, 9, 3, 3, 3]

let hash = new Map();
let result = []

for (let i = 0 ; i < arrA.length ; i++) {
  if (!hash.get(arrA[i])) {
    hash.set(arrA[i], 1)
  }
}

for (let i = 0 ; i < arrB.length ; i++) {
  if (hash.get(arrB[i])) {
    result.push(arrB[i])
  }
}

console.log(result)
console.log(Array.from(new Set(result)))
