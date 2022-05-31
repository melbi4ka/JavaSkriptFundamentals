function addAndSubtract (arr){
    let newArray = arr;
    let oldSum = 0;
    let newSum = 0

    for (let i= 0; i < newArray.length; i++) {
        oldSum += newArray[i];
        if (arr[i] % 2 === 0){
            newArray[i] += i;
        } else {
            newArray[i] -= i;
        }
        newSum += newArray[i];
    }  
    console.log(newArray)
    console.log(oldSum)
    console.log(newSum)      
}
addAndSubtract([5, 15, 23, 56, 35])
console.log("------")
addAndSubtract([-5, 11, 3, 0, 2])
