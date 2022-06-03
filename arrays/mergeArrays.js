function mergeArrays (arrOne, arrTwo) {
    let arrTree = [];

    for (i = 0; i < arrOne.length; i++){
        if (i % 2 === 0) {
            arrTree.push(Number(arrOne[i]) + Number(arrTwo[i]));
        } else {
            arrTree.push (arrOne[i] += arrTwo[i]);
        }
    }
    console.log(arrTree.join(" - "))
}
