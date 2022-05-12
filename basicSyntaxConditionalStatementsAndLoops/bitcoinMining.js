function bitcoinMining (input){
    index = 0;
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;
    let totalMoney = 0;
    let dayCounter = 0;
    let boughtBitcoins = 0;
    let firstDay = 0;

    for (i = 1; i <= input.length; i++){
        let amountGold = Number(input[index]);
        index++
        dayCounter++;

        if (dayCounter % 3 === 0){
            amountGold *= 0.7;
        }
        totalMoney += amountGold * goldPrice;
        if (totalMoney >= bitcoinPrice){
            while (totalMoney >= bitcoinPrice){
                totalMoney -= bitcoinPrice;
                boughtBitcoins++;
                if (boughtBitcoins == 1){
                    firstDay = dayCounter; 
                }
            }
        }
    }   
    console.log(`Bought bitcoins: ${boughtBitcoins}`)
    if (firstDay > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`)
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)    
}

bitcoinMining([3124.15, 504.212, 2511.124])
bitcoinMining([50, 100])
bitcoinMining([100, 200, 300])