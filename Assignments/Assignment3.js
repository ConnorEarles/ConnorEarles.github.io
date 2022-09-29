function GCD(input1,input2){
    value1 = document.getElementById("input1").value
    value2 = document.getElementById("input2").value

    if((typeof value1 !== 'number') || (typeof value2 !== 'number'))
        return false;
    value1 = Math.abs(value1);
    value2 = Math.abs(value2);

    while(value2){
        var t = value2;
        value2 = value1 % value2
        value1 = t
    }
    value1 = document.getElementById("output").innerHTML
    
    
}

    
