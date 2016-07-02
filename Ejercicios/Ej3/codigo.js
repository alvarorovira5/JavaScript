var valores = [true, 5, false, "hola", "adios", 2];

if(valores[3].length<valores[4].length){
    document.write("El mayor es "+valores[4]+"\n");
}else{
    document.write("El mayor es "+valores[3]+"\n");
}

document.write("\n");

var bool_1= valores[0];
var bool_2= valores[2];

if(bool_1 && bool_2){
    document.write("False\n");
}

if(bool_1 || bool_2){
    document.write("True\n");
}

var num1= valores[1];
var num2= valores[5];

var suma= num1+num2;
document.write("La suma es: "+suma+"\n");

var resta= num1-num2;
document.write("La resta es "+resta+"\n");

var mult= num1*num2;
document.write("La multiplicación es "+mult+"\n");

var division= num1/num2;
document.write("La division es "+division+"\n");

var modulo= num1%num2;
document.write("El modulo es "+modulo+"\n");