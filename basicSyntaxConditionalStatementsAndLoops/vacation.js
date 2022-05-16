function vacation (group, type, day){
    group = Number(group);
    let price = 0;


    switch (type) {
        case "Students":
            if (day === "Friday"){
                price = 8.45;
            } else if (day === "Saturday"){
                price = 9.80;
            } else if (day === "Sunday"){
                price = 10.46;
            }
            if (group >= 30) {
                price *= 0.85
            }
            break; 
        case "Business":
            if (day === "Friday"){
                price = 10.90;
            } else if (day === "Saturday"){
                price = 15.60;
            } else if (day === "Sunday"){
                price = 16;
            }
            if (group >= 100) {
                group -= 10
            }
            break;
        case "Regular":
            if (day === "Friday"){
                price = 15;
            } else if (day === "Saturday"){
                price = 20;
            } else if (day === "Sunday"){
                price = 22.50;
            }
            if (group >= 10 && group <= 20) {
                price *= 0.95
            }
            break;
    }
    let totalPrice = group * price
    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}
vacation(30,
    "Students",
    "Sunday"
    )
vacation(40,
    "Regular",
    "Saturday"
    )

    
	//Friday	Saturday	Sunday
    //Students	8.45	9.80	10.46
    //Business	10.90	15.60	16
    //Regular	15	20	22.50
    