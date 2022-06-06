function equalSums (arr){

    let haveEqualSum = false; 
    
    for (let i = 0; i < arr.length; i++){
        let leftSum = 0;
        let rightSum = 0;

        for (let j = i-1; j >= 0; j--){
            leftSum += arr[j];
        }

        for (let num = i+1; num < arr.length; num++){
            rightSum += arr[num];
        }
        if (leftSum === rightSum){
            console.log(i);
            haveEqualSum = true;
        }
    }
    if (!haveEqualSum){
        console.log("no")
    }
}
