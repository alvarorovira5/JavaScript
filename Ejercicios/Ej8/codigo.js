var cadena=prompt("Introduce una cadena: ");

alert(esPalindromo(cadena));

function esPalindromo(cadena){
    
    var cadenaMinus=cadena.toLowerCase();
    //array .split(""); letra a letra (deja espacios!!)
    //array .split(" "); palabra a palabra
    var cadenaArray=cadenaMinus.split("");
    
    var cadenaSinEspacios="";
    
    for(var i=0; i<=cadenaArray.length-1;i++){
        if(cadenaArray[i] != " "){
            cadenaSinEspacios+=cadenaArray[i];
        }
    }

    var letras=cadenaSinEspacios.split("");
    var letarAlReves= cadenaSinEspacios.split("").reverse();
  
    var iguales=true;
    for(var i=0;i<=letras.length-1;i++){
        
        if(letras[i]==letarAlReves[i]){
            //es igual, todo bien
        }else{
            //no es palindromo
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