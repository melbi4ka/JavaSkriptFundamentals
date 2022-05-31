function maxNumber (arr){
    let max = []

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > arr[i+1]){
            max.push(arr[i])
        }
        if (i == arr.length-1){
            max.push(arr[i])
        }
    }
    console.log(max)
}

maxNumber([1, 4, 3, 2])
maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([41, 41, 34, 20])
maxNumber([27, 19, 42, 2, 13, 45, 48])
