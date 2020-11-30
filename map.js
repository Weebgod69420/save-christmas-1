

function map(arr, func) {
    const newArray = new Array(arr.length)
    for (let i = 0; i < newArray.length; i++) {
        newArray[i] = func(arr[i])
    }return newArray // returnera den nya arrayen
}

// för varje element i arr
// newArray[j] = func(arr[j])

// Test 1
console.log('\nTEST 1')
const numberArray = [10, 50, 100]
const newNumberArray = map(numberArray, x => x + 5)
console.log(newNumberArray) // [15, 55, 105]
console.log(numberArray)    // [10, 50, 100] 

// Test 2
console.log('\nTEST 2')
const stringArray = ['boll', 'häst', 'flygplan']
const newStringArray = map(stringArray, str => str.toUpperCase())
console.log(newStringArray) // ['BOLL', 'HÄST', 'FLYGPLAN']
console.log(stringArray)    // ['boll', 'häst', 'flygplan']

// Test 3 - GÖR ETT EGET TEST HÄR
console.log('\nTEST 3')
const arrArr = ["arr", 54, "mateys.", 12, "of us will die", 2, "day. Good luck anyways.. arrrrrr"]
const newArrArr = map(arrArr, x => x * 2 )
console.log(arrArr)
console.log(newArrArr) 
// den returnar en del nan men tänker att pirater säkert åkte till indian ibland och käkade bara...
