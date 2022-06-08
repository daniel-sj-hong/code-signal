function solution(inputString) {
  let finalSolution = inputString
  while (finalSolution.includes('(')) {
    let solution = '';
    for (let i = 0; i < finalSolution.length; i++) {
      if (finalSolution[i] !== '(' && finalSolution[i] !== ')') {
        solution += finalSolution[i]
      } else {
        let insidePara = '';
        let openPara = 1;
        for (let j = i + 1; j < finalSolution.length; j++) { // this for loop is creating insidePara
          if (finalSolution[j] !== ')' && finalSolution[j] !== '(') {
            insidePara += finalSolution[j]
          } else if (finalSolution[j] === '(') {
            openPara++
            insidePara += finalSolution[j]
          } else if (finalSolution[j] === ')' && openPara > 1) {
            insidePara += finalSolution[j]
            openPara--;
          } else {
            i = j;
            break;
          }
        }
        let reversed = reverseString(insidePara)
        solution += reversed
      }
    }
    finalSolution = solution
  }
  return finalSolution
}

// (zab)rab
// )zab(rab
// foo(bar)baz
// zab(rab)oof

function reverseString(input) {
  let reversed = '';
  for (let i = input.length - 1; i >= 0; i--) {
    if (input[i] !== '(' && input[i] !== ')') {
      reversed += input[i]
    } else if (input[i] === ')') {
      reversed += '('
    } else if (input[i] === '(') {
      reversed += ')'
    }
  }
  return reversed
}

/*
    create a solution variable that will hold the solution
    loop through inputString
        if inputString[i] doesn't equal "(" and ")"
            push to solution variable
        else we found the opening parenthesis
            now keep proceeding until we find the closing parenthesis
            and then call the reverseString method on string inside the parenthesis
            move for loop pointer to after the closing ')'
*/

/* reverseString function
    create variable to hold reversed string
    do the backwards loop thing through inputString
    if inputString[i] equals ( then skip
    else push inputString[i] into variable
*/
