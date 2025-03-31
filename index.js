function hasTargetSum(array, target) {
  // Write your algorithm here
  
  // Solution 1
  /* let currentElement = array[0];
  for (let element of array) {
    if(currentElement != element) {
      let sum = currentElement + element;
      if (sum === target) {
        console.log(sum)
        return true;
      } else {
        currentElement = element;
        console.log('currentElement', currentElement)
      }
    }
    return false;
  } */

  // Final solution 
   
  const seenNumbers = new Set(); // initialize an empty Set
  for (const number of array) {
    const complement = target - number;

    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;

    // .add adds the number to the Set
    seenNumbers.add(number);
  }
  return false;
}

/* 
 // Final solution 

  Write the Big O time complexity of your function here
  Our final solution has:

  Time complexity: O(n)
  Space complexity: O(n)


  Explanations:

  For time complexity:
  Set initialization takes O(1) (constant time).
  Looping through the array: The loop performs n iterations. If n is the length of the array, the loop will through each element once thus O(n) (linear time).
  Within our loop, the simple arithmetic operation takes O(1) lookup time (const complement = target - number;).
  Checking if an element exist in the set is O(1) on average (if (seenNumbers.has(complement)) return true;).
  Adding an element to a Set is equally O(1) on average (seenNumbers.add(number);).

  Calculating overall Time complexity:
  Loop O(n), Arithmetic operations Set.has() and Set.add() takes O(1) time each.
  looking for a high-level summary, We can remove the constants and end up with O(n).


  For Space complexity:
  Since we measure space complexity relative to the size of the input: 
  Input Storage (array and target):
  Since the function does not modify the input array, and target is a single number, No extra space is used here beyond the function parameters: O(1) space.
  Other Variables (complement, number): Are single numbers stored in constant space: O(1) space.
  For the Set: It stores the numbers. In the worst case, all n numbers are not similar and are stored in the Set. This implies that the Set can hold up to n elements in the worst case: O(n) space.
  
  Calculating overall Space complexity:
  The Set is the dorminant term in space, and it can grow up to O(n). Other variables take constant space, insignificant compared to the Set's.
  We therefore end up with O(n) space complexity (linear space).
*/

/* 
  Add your pseudocode here
  Pseudocode 1.
  1. Iterate over the array
  2. Store the first element in the array, add it to all the others while doing the comparison.
  3. If no match is found, replace the fist element with the second one. Compare all the others. If there is no match drop it, and continue until the second last element.
  (array.length -1) + the last element completes the process.

  Pseudocode 2.
  iterate over the array of numbers
    for the current number, identify a complementary number that adds to our target
    (for example: if our number is 2, and the target is 5, the complementary number is 3)
    iterate over the remaining numbers in the array
      check if any of the remaining numbers is the complement
        if so, return true
  if we reach the end of the array, return false

  Pseudocode 3. (optimized)
  create an object to keep track of all the numbers we've seen
  iterate over the array of numbers
    for the current number, identify a complementary number that adds to our target
    (for example: if our number is 2, and the target is 5, the complementary number is 3)
    check if any of the keys in our object is the complement to the current number
      if so, return true
    save the current number as the key on our object so we can check it later against other numbers
  if we reach the end of the array, return false

  // Final solution 
*/

/*
  Add written explanation of your solution here

  // Explanation of the optimized solution and time complexity check.

  function hasTargetSum(array, target) {
    // create an object to keep track of all the numbers we've seen
    const seenNumbers = {};
    // iterate over the array of numbers
    for (const number of array) {
      // for the current number, identify a complementary number that adds to our target
      // (for example: if our number is 2, and the target is 5, the complementary number is 3)
      const complement = target - number;
      // check if any of the keys in our object is the complement to the current number
      // if so, return true
      if (seenNumbers[complement]) return true;
      // save the current number as the key on our object so we can check it later against other numbers
      seenNumbers[number] = true;
    }
    // if we reach the end of the array, return false
    return false;
  }

  function hasTargetSum(array, target) {
    // 1 step
    const seenNumbers = {};
    for (const number of array) {
      // n steps
      const complement = target - number;
      // n steps
      if (seenNumbers[complement]) return true;
      // n steps
      seenNumbers[number] = true;
    }
    // 1 step
    return false;
  }

  // Final solution 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
