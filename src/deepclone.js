function deepClone(obj) {
  let result = Array.isArray(obj) ? [] : {}

  for (let i in obj) {
    result[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
  }

  return result;
}

function deepCloneB(obj) {
  return JSON.parse(JSON.stringify(obj))
}

let test = {
  a: 1,
  b: {
    c: [1, 2, 3]
  }
}

let clone = deepCloneB(test);
debugger;
console.log(test)
console.log(clone)
console.log(test === clone)