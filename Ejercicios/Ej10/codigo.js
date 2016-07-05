
		function cambiar(id){
			var valor=document.getElementById(id).innerHTML;
			
			if(valor==0){
				document.getElementById(id).innerHTML=1;
				
			}
			else{
				document.getElementById(id).innerHTML=0;
			}
			calcular();//funcion para calcular
		}
		function calcular(){
			array=[bit7,bit6,bit5,bit4,bit3,bit2,bit1,bit0];
			//nota mi bit7 en la ejecucion del programa es el el boton bit0.
			var as=0;
			for(i=0;i<=7;i++){
				if(array[i].innerHTML==1){
					as=as+Math.pow(2,i);	
				}	
			}
			result.value=as;
		}
		function conversor(){
		
			var y= result.value;
			if(isNaN(y)){
				
				var j="No es un num.";
				document.getElementById("result").value=j;
			
			}
			else{
			if(y < 255){
			
			var resulResta;
			for(i=7;i>=0;i--){
				
				var x=Math.pow(2,i);
				array=[bit7,bit6,bit5,bit4,bit3,bit2,bit1,bit0];
				
				resulResta=y-x;
				if(resulResta>=0){
					array[i].innerHTML=1;
					y=resulResta;
				}
				else{
					array[i].innerHTML=0;
				}
			
			}
			}
			else{
				var z="Error. > que 255";
				document.getElementById("result").value=z;
			}
			}
			
		}
		