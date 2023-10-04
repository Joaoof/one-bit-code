const numbers = [1, 4, 1, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
   return Math.pow(num, 2).toString()
}

const result = newArr.join('')
console.log(result);
