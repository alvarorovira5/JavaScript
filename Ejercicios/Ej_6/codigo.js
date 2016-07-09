var valor= prompt("Dime un numero");

alert(par_O_impar(valor));

function par_O_impar(numero){
    var resultado;
    if(numero % 2 == 0){
        resultado="PAR";
    }else{
        resultado="IMPAR";
    }
    return resultado;
}