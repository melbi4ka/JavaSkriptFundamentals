function printAndSum (startNum, endNum){
    startNum = Number(startNum);
    endNum = Number(endNum);
    let sum = 0;
    let numsForPrint = "";

    for (let i = startNum; i <= endNum; i++){
        sum += i;
        numsForPrint += i + " ";
    }
    console.log(numsForPrint)
    console.log(`Sum: ${sum}`)
}
printAndSum(5, 10)
printAndSum(0, 26)
printAndSum(50, 60)
