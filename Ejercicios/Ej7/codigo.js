var cadena=prompt("Introduce una cadena: ");

alert(comprobarCadena(cadena));


function comprobarCadena(cadena){
    var resultado;
    
    
        if(cadena == cadena.toUpperCase()){
            resultado="La cadena esta formada SOLO por Mayusculas.";
        }else if (cadena == cadena.toLowerCase()){
            resultado="La cadena esta formada SOLO por Minisculas.";
        }else{
            resultado="La cadena esta formada por Mayusculas y Minisculas.";
        }
    return resultado;
}