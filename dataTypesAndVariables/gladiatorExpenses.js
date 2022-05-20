function gladiatorExpences (lostFight, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let allCosts = 0;
    let shieldCounter = 0; 


    for (let i = 1; i <= lostFight; i++){
        if (i % 2 == 0){
            allCosts += helmetPrice;
        } 
        if (i % 3 == 0){
            allCosts += swordPrice;
        } 
        if (i % 2 == 0 && i % 3 == 0){
            allCosts += shieldPrice;
            shieldCounter++;
            if (shieldCounter % 2 == 0){
                allCosts += armorPrice
            }
        }
    }
    console.log(`Gladiator expenses: ${allCosts.toFixed(2)} aureus`)
}
