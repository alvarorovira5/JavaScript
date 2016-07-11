function validarFormulario(){
				var formOK=true;
				
				if(!validarNombre()){
					formOK=false;
				}
				if(!validarPrimerApellido()){
					formOK=false;
				}
				if(!verificarEmail()){
					formOK=false;
				}
				if(!verificarTelefono()){
					formOK=false;
				}
				return formOK;
			}
			
			function validarNombre(){
			
				var valor;
			
					valor=document.getElementById("nombre").value;
			
				if(valor==""){
				
					//Poner mensaje de error				
					var objetoNombre=document.getElementById("errorNombre");
					objetoNombre.innerHTML="Tu nombre por favor."
					objetoNombre.style.color="yellow";
					
					//Colorear el borde
					var objetoNombre2=document.getElementById("nombre");
					objetoNombre2.style.borderColor="yellow";
					
					return false;
				}else{
					return true;
				}
			
			}
			
			function validarPrimerApellido(){
				var valor;
			
					valor=document.getElementById("primerApellido").value;
			
				if(valor==""){
				
					//Poner mensaje de error				
					var objetoPrimerApellido=document.getElementById("errorPrimerApellido");
					objetoPrimerApellido.innerHTML="Tu primer apellido por favor."
					objetoPrimerApellido.style.color="yellow";
					
					//Colorear el borde
					var objetoPrimerApellido2=document.getElementById("primerApellido");
					objetoPrimerApellido2.style.borderColor="yellow";
					
					return false;
				}else{
					return true;
				}
			
			
			}
			
			function verificarEmail(){
			
				var valor;
				valor=document.getElementById("email").value;
				
				if(valor==""){
					//Poner mensaje de error				
					var objetoEmail=document.getElementById("errorEmail");
					objetoEmail.innerHTML="Tu email por favor."
					objetoEmail.style.color="yellow";
					
					//Colorear el borde
					var objetoEmail2=document.getElementById("email");
					objetoEmail2.style.borderColor="yellow";
					
					return false;
				}
				var patron=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
				
				if(patron.test(valor)){
					return true;
				}
				else{
					var objetoEmail=document.getElementById("errorEmail");
					objetoEmail.innerHTML="Un email válido por favor, ej. nombre@dominio.tld."
					objetoEmail.style.color="yellow";
					
					return false;
				}
			
			}
			
			function verificarTelefono(){
				
				valor=document.getElementById("telefono").value;
				var patron=/^[6789]\d{8}$/;
				
				if(patron.test(valor)){
					return true;
				}
				else{
					var objetoTelefono=document.getElementById("errorTelofono");
					objetoTelefono.innerHTML="Número de un fijo o móvil español valido. Ej. 622345679 (sin guiónes y sin espacios)";
					objetoTelefono.style.color="yellow";
					
					return false;
				}
			}