function moverBola(){
				//console.log(i++);
				//calcular nuevas x e y 
				if(derecha){
					x++;
				}
				else{
					x--;
				}
				if(abajo){
					y++;
				}
				else{
					y--;
				}
				
				
				if (x<0 || x>460){
					//objeto invierte su sentido horizontal
					derecha=!derecha;
				}
				if(y<0 || y>360){
					//
					abajo=!abajo;
				}
				//asignar esas x e y nuevas al left y top
				document.getElementById("bola").style.left=x+ "px";
				document.getElementById("bola").style.top=y+ "px";
				
			}
			var derecha=true;
			var abajo=true;
			var x=Math.floor(Math.random()*460);
			var y=Math.floor(Math.random()*360);
			
			document.getElementById("bola").style.left=x+ "px";
			document.getElementById("bola").style.top=y+ "px";
			
			setInterval("moverBola()",5);