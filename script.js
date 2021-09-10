function arrayDiff(a, b) {
  if (a === []) {
    return []
  }
  let MaxLength = () => { // длинна самого длинного массива
    if (a.length > b.length) {
      return a.length
    } else {
     return b.length
    }
  }
  for (let y = 0; y < MaxLength(); y) {
    if (a[y] === b[y]) {
      a.splice(y, 1)
      b.splice(y, 1)
    }
    console.log(y)
  }
  console.log(a)
  console.log(b)
}
arrayDiff([1,2,3], [1,2])