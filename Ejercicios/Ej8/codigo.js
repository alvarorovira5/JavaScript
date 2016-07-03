var cadena=prompt("Introduce una cadena: ");

alert(esPalindromo(cadena));

function esPalindromo(cadena){
    

    var cadenaMinus=cadena.toLowerCase();
    
    //array
    var cadenaArray=cadenaMinus.split(" ");
    document.writeln("Array1 ["+cadenaArray+"]\n");
    //array al reves
    var cadenaArrayReves=cadenaArray.reverse();
    document.writeln("Array2 ["+cadenaArrayReves+"]");
    var iguales=true;

    for(i in cadenaArray){
        
        if(cadenaArray[i]==cadenaArrayReves[i]){
            
        }else{
            iguales=false;
        }
        
        
    }
    var resultado;
    
    if(iguales){
        resultado="Es palindromo";
    }else{
        resultado="No es palindromo";
    }
    
    return resultado;
    
}