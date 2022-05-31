function commonElements (arrOne, arrTwo){
    for (let elOne of arrOne) {
        for (let elTwo of arrTwo) {
            if (elOne === elTwo) {
                console.log(elOne)
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l'])
