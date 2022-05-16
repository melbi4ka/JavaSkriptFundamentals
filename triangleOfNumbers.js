function triangleOfNumbers (num){
    num = Number(num);

    for (let i =1; i <= num; i++){
        let forPrint = "";
        for (let j = 1; j <= i; j++){
            forPrint += i;
            if (j !== i){
                forPrint += " ";
            }
        }
        console.log(forPrint);
    }
}
triangleOfNumbers(3)