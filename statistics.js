
const naghtyPoints = [5, 2, 7, 9, 123123, 456, 2, 6, 2, 1, 0, 3434589]

// Hitler och Ghandi levde under samma tidsperiod(stalin också)

function max(arr) {
    let greatValue = 0
for (let i = 0; i < arr.length; i++) {
       if (arr[i] > greatValue){
           greatValue = arr[i]
       }
    } return greatValue

}

function min(arr) {
    let notGreatValue = Infinity
    for (let i = 0; i < arr.length; i++) {
        if (notGreatValue > arr[i]){
            notGreatValue = arr[i]
        }
    } return notGreatValue
}

function mean(arr) {
    let arrValue = 0
for (let i = 0; i < arr.length; i++) {
        arrValue = arrValue + arr[i]
    }   arrValue = arrValue / arr.length
        return arrValue 
}


console.log(max(naghtyPoints))
console.log(min(naghtyPoints))
console.log(mean(naghtyPoints))