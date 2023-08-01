/// const number = [1, 2, 3];
// let[numOne, numTwo, numThree]=number
// console.log(numOne, numTwo, numThree);

// const names = ['Tasneem', 'Hassan', 'Hussain', 'Shahzad'];
// let[onePerson, twoPerson, threePerson, fourPerson]=names
// console.log(onePerson, twoPerson, threePerson, fourPerson);

// const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
// let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants
// console.log(e, pi, gravity, bodyTemp, boilingTemp)

// const fullStuck =[['HTML','CSS', 'JAVASCRIPT', 'REACT'],
//                  ['NODE', 'EXPRESS', 'MONGODB']]

// const[FrontEnd, BackEnd]=fullStuck
// console.log(FrontEnd)
// console.log(BackEnd)

// const numbers = [1,2,3]
// let [numOne, , numThree]=numbers
// console.log(numOne, numThree);


// const names = ['Tasneem', 'Hassan', 'Hussain', 'Shahzad'];
// let[, twoPerson, , fourPerson]=names
// console.log(twoPerson, fourPerson);

const names = [undefined, 'Arshad', 'Hassan']
let [
    firstPerson = 'Tasneem',
    secondPerson,
    thirdPerson,
    forthPerson = 'Hussain'
]=names

console.log(firstPerson,secondPerson,thirdPerson,forthPerson)