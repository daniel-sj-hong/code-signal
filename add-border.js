function solution(picture) {
  const lengthOfAst = picture[0].length + 2;
  const solution = [];
  let topBottom = '';

  for (let i = 0; i < lengthOfAst; i++) {
    topBottom += '*'
  }
  solution.push(topBottom)

  for (let i = 0; i < picture.length; i++) {
    let row = '*'
    row += picture[i]
    row = row + '*'
    solution.push(row)
  }
  solution.push(topBottom)
  return solution
}

/*
    count the length of a row
    and account for the beginning and end *

    now we have the length of the top and bottom row of *

    loop through and create row of *

    in the solution array, push the top row of *
    then the string inputs with the beginning and end *
    lastly the bottom row of *
*/
