const names = ["Einar", "jonte", "tredjenamn", "namnpåhusdjurelrngt"]
const numbers = [1, 2 ,15, 634]

// for (let i = 0; i < names.length; i++) {
//     console.log("hej", names[i])
// }

let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
}

console.log(sum)