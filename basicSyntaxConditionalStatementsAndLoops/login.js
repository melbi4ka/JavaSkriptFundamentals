function login (input){
    let passCounter = 0;
    let password = input[0];

    for (i = 0; i< input.length -1; i++){
        
        let reverse = input[i+1].split("").reverse().join("");
        passCounter++;

        if (password === reverse){
            console.log(`User ${password} logged in.`);
            //break; 
        } else {
            
            if (passCounter < 4){
                console.log("Incorrect password. Try again.");

            } else if (passCounter == 4) { 
                console.log(`User ${password} blocked!`);
                break; 
            }
        }
    }
}
