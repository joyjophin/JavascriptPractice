function flatten(arr) {
  let result = [];

  if (!Array.isArray(arr)) {
    return arr
  }

  for (let i = 0; i < arr.length; i++) {
    result = result.concat(flatten(arr[i]))
  }

  return result
}

let test = [
  1, 2, 3,
  [4, [5, NaN], 7],
  [[[null]]]
]

console.log(flatten(test));