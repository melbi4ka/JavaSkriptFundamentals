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
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])
mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44'])