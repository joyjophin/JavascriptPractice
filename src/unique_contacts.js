let test = [
  {
    id: 1,
    name: 'a'
  },
  {
    id: 2,
    name: 'a'
  },
  {
    id: 3,
    name: 'b'
  }
]

const unique = test.reduce((a, v) => {
  !a.get(v.name) && a.set(v.name, v)
  return a;
}, new Map())


console.log(Array.from(unique.values()))