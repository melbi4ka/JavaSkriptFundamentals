function spiceMustFlow (startinYield){
    let totalAmounth = 0;
    let dayCounter = 0;

    while (startinYield >= 100){
        dayCounter++; 
        let leavingSpice = startinYield - 26
        totalAmounth += leavingSpice;
        startinYield -= 10;
    }
    if (totalAmounth >= 26) {
        totalAmounth -= 26;
    } else {
        totalAmounth = 0;
    }
    console.log(dayCounter);
    console.log(totalAmounth)
}
