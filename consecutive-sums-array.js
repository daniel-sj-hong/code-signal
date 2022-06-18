/*
Given an array of numbers, return a consecutiveSumsArray where the items are all combinations of sums of 3 consecutive numbers from the given array.
e.g. [1, 2, 3] -> [6]
[1,2,3,4] -> [6,9]
[5,10,1,3,6,200] -> [16,14,10,209]

*/
function consecutiveSumsArray(arr) {
  const result = [];  // result = [16, 14, 10, 209]
  let sum = 0;    // sum = 0

  for (let i = 0; i < arr.length - 2; i++) {  // i = 4
    for (let j = i; j < i + 3; j++) {   // j = 6
      console.log(arr[j])
      sum += arr[j]
    }
    result.push(sum)
    sum = 0
  }
  return result
}

console.log(consecutiveSumsArray([5, 10, 1, 3, 6, 200]))
/*
    create a variable for the final result array to be returned
    create a sum variable

    loop through the array passed in
        create a second loop to go count up to 3 indexes
            sum up the first 3 indexes
            push the sum into final result array

            move onto the next 3
            sum up next 3 indexes
            push sum into final result array

            repeat until the last 3 in the array

    return final result array
*/
