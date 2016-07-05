function factorial(){
    var numero=document.getElementById("numero").value;

    var resultado=1;
    if(numero==0){
        document.getElementById("resultado").value=resultado;
    }else{
        for(var i=numero;i>1;i--){
        resultado=i*resultado;
        }
        document.getElementById("resultado").value=resultado;
    }
}


