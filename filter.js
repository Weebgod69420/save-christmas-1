


function filter(arr, func) {
let filterArr = new Array(arr.length)
for (let i = 0; i < filterArr.length; i++) {
    filterArr[i] = func(arr[i])
    } return filterArr
}
// TEST 1
const numbers = [4, 10, 3, 12, 5, 16, 8, 13, 2, 9, 1, 11, 2]
const filteredNumbers = filter(numbers, x => x < 10)
console.log(filteredNumbers)

// TEST 2 - skriv själv
const numbers2 = [6, 2, 5, 19, 1234, 356, 34, 3, 5, 1, 1, 11]
const filteredNumbers2 = filter(numbers2, x => x.toString().charAt(0) !== "1" )
console.log(filteredNumbers2)

// TEST 3 - skriv själv

const numbers3 = [ 2, 5, 7, 8, 9, 1, 3, 6, 1, 6, 4, 7, 8, 8, 3, 8]
const filterednumbers3 = filter(numbers3, x => x % 2 === 0)
console.log(filterednumbers3)