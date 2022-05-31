function arrayRotation (arr, number){
    let newArr = [];
    let i = 0;

    while (i < number){
        let removed = arr.shift()
        arr.push(removed); 
        i++;         
    }    
    console.log(arr.join(" "))
}


arrayRotation([51, 47, 32, 61, 21], 2)
console.log("------")
arrayRotation([32, 21, 61, 1], 4)
console.log("------")
arrayRotation([2, 4, 15, 31], 5)