//create an algorithm that converts roman numeral into integers

const convertor=function(romanNumeral=""){
    if (!romanNumeral){
        console.log("No input was given: ");
    }
    else{      
        let numbers={"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000};
        if (romanNumeral.length===1){
            console.log(numbers[romanNumeral]);
        }else{
            let sum=0;
            for (i of romanNumeral){
                sum=sum+numbers[i]      
            }
            console.log(sum)
        }
    }
}
convertor()
convertor("D")
convertor("MID")
