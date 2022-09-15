function maxSequenceOfEqual(arr){

    let currentMax = [];
    let maxSequence = []

    for (let i = 0; i < arr.length; i++){
        currentMax = []
        for (let j = i; j < arr.length; j++){
            if (arr[i] === arr[j]){
                currentMax.push(arr[j]);
            } else {
                break
            }
        }
        if (currentMax.length > maxSequence.length){
            maxSequence = currentMax
        }
        
        
    }
    console.log(maxSequence.join(" "))

}



maxSequenceOfEqual([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequenceOfEqual([1, 1, 1, 2, 3, 1, 3, 3])
maxSequenceOfEqual([4, 4, 4, 4])
maxSequenceOfEqual([0, 1, 1, 5, 2, 2, 6, 3, 3])