// Exercise #1

function firstNonConsecutive(arr){
    let num = arr[0];
    let first = -1
    for(var i = 0; i < arr.length -1; i++){
            if((num)+1 !== arr[i + 1]){
            first = arr[i];
            break;
            } num ++;
        } return first
}

arrTest = [1, 2, 3, 5, 6, 7]
console.log(firstNonConsecutive(arrTest))
arrTest2 = [1, 2, 3, 4, 5, 7, 9, 10]
console.log(firstNonConsecutive(arrTest2))
arrTest3 = [1, 2, 3, 4, 5]
console.log(firstNonConsecutive(arrTest3))





// Exercise #2

const sumPositve = (numbersList) => {
    let sum = 0
    for (let num of numbersList){
        if (num > 0){
            sum += num 
        } 
    } return sum
}


arrayTest1 = [10, 12, -9, 3, -1, 0, 15]
arrayTest2 = [3, 5, 7, 9, -10, 2, -22, -1]
arrayTest3 = [2, 10, 14, 0, -4, -10]
console.log(sumPositve(arrayTest1))  // Equal to 40
console.log(sumPositve(arrayTest2))  //Equal to 26
console.log(sumPositve(arrayTest3))  // Equal to 29



