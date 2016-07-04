function esBisiesto() {
    var valor=document.getElementById("anio").value;
    
    
    if (valor%4==0 || (valor%100==0 && valor%400==0)){
        var cadena="Es bisiesto";
        document.getElementById("resultado").value=cadena;
    }else{
        var cadena="No es bisiesto";
        document.getElementById("resultado").value=cadena;
    }
}