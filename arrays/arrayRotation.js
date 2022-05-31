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
