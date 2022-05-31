function commonElements (arrOne, arrTwo){
    for (let elOne of arrOne) {
        for (let elTwo of arrTwo) {
            if (elOne === elTwo) {
                console.log(elOne)
            }
        }
    }
}
