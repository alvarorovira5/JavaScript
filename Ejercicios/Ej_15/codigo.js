function suma(){
    var a;
    var b;
    a=document.getElementById("num1").value;
    b=document.getElementById("num2").value;

    var suma;
    suma=parseInt(a)+parseInt(b);
    document.getElementById("suma2").value=suma;
}

function resta(){
    var a;
    var b;
    a=document.getElementById("num1").value;
    b=document.getElementById("num2").value;

    var resta;
    resta=parseInt(a)-parseInt(b);
    document.getElementById("resta2").value=resta;
}