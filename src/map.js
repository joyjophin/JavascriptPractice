function map(arr, cb) {
  if (arr.length === 0) {
    return []
  }

  return [ cb(arr.shift()) ].concat(map(arr, cb));
}

let result = map(['a', 'b', 'c', 'd'], function (s) {
  return s.toUpperCase();
})

console.log(result);