function returnChange(calculate) {
    var salesPrice = Number(document.getElementById("amount-due").value);
    var payment = Number(document.getElementById("amount-received").value);
    var change = payment - salesPrice;
    change = change * 100;
    //returns the change for the dollar value
    var dollarOutput = Math.floor(change/100);
    var remainder = change - dollarOutput * 100;
    document.getElementById("dollars-output").textContent = dollarOutput;
     
    
   var quarterOutput = Math.floor(remainder/25);
   //quarterOutput = Math.ceil(change); 
   //quarterOutput = quarterOutput;
   remainder = remainder - quarterOutput * 25;
   document.getElementById("quarters-output").textContent = quarterOutput;
   
   var dimeOutput = Math.floor(remainder/10);
   remainder = remainder - dimeOutput * 10;
   document.getElementById("dimes-output").textContent = dimeOutput;

   var nickelsOutput = Math.floor(remainder/5);
   remainder = remainder - nickelsOutput * 5;
   document.getElementById("nickels-output").textContent = nickelsOutput;

   var pennyOutput = Math.round(remainder);
   document.getElementById("pennies-output").textContent = pennyOutput; 

   
}

document.getElementById("calculate-change").onclick = function (){returnChange()};