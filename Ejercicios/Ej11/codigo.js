var segundos=10;
var cont=0;
var intervalo;
var nuevoLeft,nuevoTOP;

function generaCoordenada(){
	coor=Math.floor(Math.random()*95);
	return coor;
}

function recolocar(){
	document.getElementById("presa").style.top=generaCoordenada()+"%";
	document.getElementById("presa").style.left=generaCoordenada()+"%";
}

function inicializar(){
	document.getElementById("segundero").innerHTML=segundos +" segundos";
	intervalo=setInterval("cronometrar()",1000);
	/*Aquí abajo ponemos, para poner el cuadrado*/
	
}
function cronometrar(){
	segundos--;
	document.getElementById("segundero").innerHTML=segundos +" segundos";
	if(segundos==0){
		clearInterval(intervalo);
		//Vaciar el evento onmouseover de la presa.
		document.getElementById("presa").onmouseover=null;
	
	}
}
function puntuar(){
	recolocar();
	cont=cont+1;
	if(cont==1){
		document.getElementById("puntuacion").innerHTML=cont +" punto";
	}else{
		document.getElementById("puntuacion").innerHTML=cont +" puntos";
	}
}