// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process
// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest
// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest



// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
// a) Create a test with an expect statement using the variable provided.

  // Create describe statement with name of function in quotes.
  // Create it statement describing the purpose of the function.
  // Per set of variables, create an expect statement saying that if you pass in the (people) variable to the (nameCapitalizer) function, we expect to see the (peopleOutput) variable.

describe("nameCapitalizer", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    const peopleOutput = ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(nameCapitalizer(people)).toEqual(peopleOutput)
  })
})

  // $ yarn jest (results)
  // ReferenceError: nameCapitalizer is not defined
  // Test Suites: 1 failed, 1 total
  // Tests:       1 failed, 1 total

// b) Create the function that makes the test pass.

  // Create nameCapitalizer function with const keyword. Pass in (arr) for its parameter.
  // Map over the array and return its result. Pass through (obj) as the parameter for .map()
  // Bear with me in explaining the huge chain of methods. I will explain it in logical steps to achieve each specific task. Everything is written with backticks and string interpolation.
    // CAPITALIZE FIRST LETTER OF FIRST NAME.
      // obj.name.charAt(0).toUpperCase()
        // obj.name pulls the entire name from each object ( "ford prefect"/"zaphod beeblebrox"/"arthur dent" ).
        // Append obj.name with .charAt(0).toUpperCase() to capitalize the first letter of first name.
    // LOWERCASE THE REST OF THE FIRST NAME.
      // obj.name.slice(1, obj.name.indexOf(' '))
        // Append obj.name with .slice() and specify the starting/ending arguments. Starts with 1 (index of second character) and ends with obj.name.indexOf(' ').
        // This tells the .slice() method to stop at the index of the empty character (the space between first and last name).
    // CAPITALIZE FIRST LETTER OF LAST NAME.
      // obj.name.slice(obj.name.indexOf(' ')).charAt(1).toUpperCase()
        // Slice obj.name starting with .indexOf(' '), which is the index of the empty character. This essentially pulls JUST the last name.
        // Append THAT with .charAt(1).toUpperCase(). This will uppercase the first letter of the last name.
    // LOWERCASE THE REST OF THE LAST NAME.
      // obj.name.slice(obj.name.indexOf(' ')).slice(2)
        // Pull just the last name once more with obj.name.slice(obj.name.indexOf(' '))
        // From there, we can call .slice() once more to get the rest of the last name after the first letter.

const nameCapitalizer = (arr) => {
  return arr.map(obj => `${obj.name.charAt(0).toUpperCase()}${obj.name.slice(1, obj.name.indexOf(' '))} ${obj.name.slice(obj.name.indexOf(' ')).charAt(1).toUpperCase()}${obj.name.slice(obj.name.indexOf(' ')).slice(2)} is ${obj.occupation}.`)
}

  // $ yarn jest (results)
  // PASS  ./code-challenges.test.js
  // Test Suites: 1 passed, 1 total
  // Tests:       1 passed, 1 total



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
// a) Create a test with an expect statement using the variables provided.

  // Create describe statement with name of function in quotes.
  // Create it statement describing the purpose of the function.
  // Per set of variables, create an expect statement saying that if you pass in the (hodgepodge1/2) variables to the (remainderThree) function, we expect to see the (hodgepodgeOutput1/2) variables.

describe("remainderThree", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodgeOutput1 = [ 2, 0, -1, 0 ]
    expect(remainderThree(hodgepodge1)).toEqual(hodgepodgeOutput1)
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    const hodgepodgeOutput2 = [ 2, 1, -1 ]
    expect(remainderThree(hodgepodge2)).toEqual(hodgepodgeOutput2)
  })
})

  // $ yarn jest (results)
  // ReferenceError: remainderThree is not defined
  // Test Suites: 1 failed, 1 total
  // Tests:       2 failed, 2 total

// b) Create the function that makes the test pass.

  // Create remainderThree function with const keyword. Pass in (arr) for its parameter.
  // Filter over arr and specify that we want only the data types of 'number'. This returns an array with JUST the numbers.
  // Chain that with a map where we modulo each value by 3. Return the result of this entire line of code.

const remainderThree = (arr) => {
  return arr.filter(val => typeof val === 'number').map(val => val % 3)
}

  // $ yarn jest (results)
  // PASS  ./code-challenges.test.js
  // Test Suites: 1 passed, 1 total
  // Tests:       2 passed, 2 total



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
// a) Create a test with an expect statement using the variables provided.

  // Create describe statement with name of function in quotes.
  // Create it statement describing the purpose of the function.
  // Per set of variables, create an expect statement saying that if you pass in the (cubeAndSum1/2) variables to the (quickMaths) function, we expect to see the (cubeAndSumOutput1/2) variables.

describe("quickMaths", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSumOutput1 = 99
    expect(quickMaths(cubeAndSum1)).toEqual(cubeAndSumOutput1)
    const cubeAndSum2 = [0, 5, 10]
    const cubeAndSumOutput2 = 1125
    expect(quickMaths(cubeAndSum2)).toEqual(cubeAndSumOutput2)
  })
})

  // $ yarn jest (results)
  // ReferenceError: quickMaths is not defined
  // Test Suites: 1 failed, 1 total
  // Tests:       3 failed, 3 total

// b) Create the function that makes the test pass.

  // Create quickMaths function with const keyword. Pass in (arr) for its parameter.
  // Map over the array and cube each value. This returns the array with all values cubed.
  // Chain that with a .reduce() method and specify within the argument that we will add the current number with the previous number. This returns the sum as a number outside of an array (what we want). Return the result of this entire line of code.

const quickMaths = (arr) => {
  return arr.map(val => val ** 3).reduce((a, b) => a + b)
}

  // $ yarn jest (results)
  // PASS  ./code-challenges.test.js
  // Test Suites: 1 passed, 1 total
  // Tests:       3 passed, 3 total