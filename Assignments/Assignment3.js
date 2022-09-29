function GCD(){
    console.log("Please Work");
    value1 = document.getElementById("input1").value
    value2 = document.getElementById("input2").value
    console.log(value1, value2);
   
    
    while(value2){
        var t = value2;
        value2 = value1 % value2
        value1 = t
        console.log(t)
    }
    document.getElementById("output").value = value1;


function Sum(){
     let sum = 0
     SumNum = document.getElementById(SumNum).value
     while(SumNum){
         sum += SumNum % 10;
         SumNum = Math.floor(SumNum / 10)

    }
     document.getElementById("SumNum").value = SumNum 

}


}

    
