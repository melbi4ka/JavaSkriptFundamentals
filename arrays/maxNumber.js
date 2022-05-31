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
