function maxNumber (arr){
    let max = []

    for (let i = 0; i < arr.length; i++){
        let current = arr[i];
        let isTopInteger = true;
        for (let j = i+1; j < arr.length; j++){
            let nextEl = arr[j];
            if (current <= nextEl){
                isTopInteger = false;
                break;
            }
        }

        if (isTopInteger){
            max.push(current)
        }
    }
    console.log(max.join(" "))
}

maxNumber([1, 4, 3, 2])
maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([41, 41, 34, 20])
maxNumber([27, 19, 42, 2, 13, 45, 48])
