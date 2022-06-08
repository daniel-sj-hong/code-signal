function solution(a) {
  const heightArray = [];
  const solutionArray = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      heightArray.push(a[i])
    }
  }
  heightArray.sort(function (a, b) { return a - b });

  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      solutionArray.push(a[i])
    } else {
      let first = heightArray.shift()
      solutionArray.push(first)
    }
  }
  return solutionArray
}

// create height array to hold non -1 numbers
// create solution array for the final solution
// loop through a
    // if a[i] doesn't equals -1, push into height array
// sort height array from smallest to biggest

// loop through a again
    // if a[i] equals -1, push into solution array
    // else if a[i] equals any other number, use shift on heightArray and get that number and push it to solutionArray
// return solutionArray
