function addAlumno(nombre){
                //Indicamos la fila, donde queremos insertar los nuevos Alumnos.
                
                
                var nuevoAlumno=document.getElementById("tabla");
                
                
               
                var tr=document.createElement("tr");
                var registro= nuevoAlumno.appendChild(tr);
                
                var td=document.createElement("td");
                var nuevoRegistro=registro.appendChild(td);
                
                //Lo siguiente es para el campo "Nombre".
                var input=document.createElement("input");
                //input.setAttribute("placeholder","Nombre del alumno");
                //nombre.setAttribute("id","nombreAlumno");
                
                //el input.value es por la caja de texto
                
                //hace4 if si es undefien haz esto, lasdfl
                nuevoRegistro.appendChild(input);
                
                input.value=nombre;
                var undf=input.value;
                
                if(undf=="undefined"){
                    //alert("pillado");
                    input.value="";
                    input.setAttribute("placeholder","Nombre del alumno");
                    
                }
                
                
                
                //var inputOk=nuevoRegistro.appendChild(input);
                
                
                //Lo siguiente es para el campo "Edad".
                var edad=document.createElement("td");
                var nuevoRegistro2=registro.appendChild(edad);
                
                var select=document.createElement("select");
                var hijoNuevo=nuevoRegistro2.appendChild(select);
                
                var optionNuevo=document.createElement("option");
                var blanco=hijoNuevo.appendChild(optionNuevo);
                var textoBlanco=document.createTextNode("");
                blanco.appendChild(textoBlanco);
                cont=10;
                while(cont<=65){
                    
                    var option=document.createElement("option");
                    var hijoSubNuevo=hijoNuevo.appendChild(option);
                    
                    var text=document.createTextNode(cont);
                    var hijoSubNuevo2=hijoSubNuevo.appendChild(text);
                    cont++;
                }
                

                //Lo siguiente es para el campo "Genero".
                
                var genero=document.createElement("td");
                var nuevoRegistro3=registro.appendChild(genero);
                
                var select2=document.createElement("select");
                var hijoNuevo2=nuevoRegistro3.appendChild(select2);
                
                var optionBlanco=document.createElement("option");
                var generoBlanco=hijoNuevo2.appendChild(optionBlanco);
                var blancoBlanco=document.createTextNode("");
                generoBlanco.appendChild(blancoBlanco);
                
                var option2=document.createElement("option");
                var hijoSubNuevo2=hijoNuevo2.appendChild(option2);
                
                
                
                var text1=document.createTextNode("Varón");
                var hijoSubNew3=hijoSubNuevo2.appendChild(text1);
                
                var option3=document.createElement("option");
                var hijoSubNew4=hijoNuevo2.appendChild(option3);
            
                var text2=document.createTextNode("Mujer");
                var hijoSubNew5=hijoSubNew4.appendChild(text2);
                
                //Lo siguiente es para el campo "Mostrar secreto"
                var secreto=document.createElement("td");
                var nuevoRegistro4=registro.appendChild(secreto);
                var secretoInicial=document.createTextNode("Generado automáticamente");
                nuevoRegistro4.appendChild(secretoInicial);
                /*var select3=document.createElement("select");
                var hijoNuevo3=nuevoRegistro4.appendChild(select3);
                var option3=document.createElement("option");
                var hijoSubNuevo3=hijoNuevo3.appendChild(option3);
                
                var text3=document.createTextNode("Mostrar secreto");
                var hijoSubNew6=hijoSubNuevo3.appendChild(text3);*/
                
                //Lo siguiente es para el campo "Guardar y cancelar"
                var botones=document.createElement("td");
                var nuevoRegistro5=registro.appendChild(botones);
                var boton=document.createElement("button");
                var hijoNuevo4=nuevoRegistro5.appendChild(boton);
                
                var texto=document.createTextNode("Guardar");
                hijoNuevo4.appendChild(texto);
                
                boton.onclick=function (){
                    guardar(this.parentNode.parentNode);
                }
                
                var boton2=document.createElement("button");
                var hijoNuevo5=nuevoRegistro5.appendChild(boton2);
                
                var texto2=document.createTextNode("Cancelar");
                hijoNuevo5.appendChild(texto2);

                boton2.onclick=function (){
                    cancelar(this.parentNode.parentNode);
                }
                
                
                
            
            }
            function guardar(tr){
                
                //Guardar Valor del Nombre
                
                //1-coger elemento de la etiqueta
                var valorInput=tr.getElementsByTagName("input")[0].value;
                
                if(valorInput==""){
                    //Si el nombre esta vacío,no hacer nada
                    alert("Inserta el nombre.")
                }
                else{
                    //2-eliminar elemento input
                    var inputExtraido=tr.getElementsByTagName("input")[0];
                    inputExtraido.parentNode.removeChild(inputExtraido);

                    //3-crear nodo texto con el valor del paso1
                    var Nuevotext=document.createTextNode(valorInput);
                    var seleccionTD=tr.getElementsByTagName("td")[0];
                    seleccionTD.appendChild(Nuevotext);

                    //Guardar Valor de la Edad

                    //1-coger elemento de la etiqueta
                    var valorEdad=tr.getElementsByTagName("select")[0].value;

                    //2-eliminar elemento select
                    var edadExtraido=tr.getElementsByTagName("select")[0];
                    edadExtraido.parentNode.removeChild(edadExtraido);

                    //3-crear nodo texto con el valor del paso1
                    var Nuevotext2=document.createTextNode(valorEdad);
                    var seleccionTD2=tr.getElementsByTagName("td")[1];
                    seleccionTD2.appendChild(Nuevotext2);

                    //Guardar Valor del Género
                    //1-coger elemento de la etiqueta
                    var valorGenero=tr.getElementsByTagName("select")[0].value;
                    //2-eliminar elemento select
                    var generoExtraido=tr.getElementsByTagName("select")[0];
                    generoExtraido.parentNode.removeChild(generoExtraido);

                    //3-crear nodo texto con el valor del paso1
                    var Nuevotext3=document.createTextNode(valorGenero);
                    var seleccionTD3=tr.getElementsByTagName("td")[2];
                    seleccionTD3.appendChild(Nuevotext3);
                    
                    //Secreto
                    /*var textoExtraido=tr.getElementsByTagName("text")[3];
                    textoExtraido.parentNode.removeChild(textoExtraido);*/
                    
                    //Cambiar a Editar y borrar...
                    var BotonGuardar=tr.getElementsByTagName("button")[0];
                    BotonGuardar.removeChild(BotonGuardar.firstChild);
                    
                    var BotonEditar=document.createTextNode("Editar");
                    BotonGuardar.appendChild(BotonEditar);
                    
                    //Cambio a borrar
                    
                    var BotonCancelar=tr.getElementsByTagName("button")[1];
                    BotonCancelar.removeChild(BotonCancelar.firstChild);
                    
                    var BotonBorrar=document.createTextNode("Borrar");
                    BotonCancelar.appendChild(BotonBorrar);
                    
                    //Click en Editar.
                    var BotonEditar=tr.getElementsByTagName("button")[0];
                    
                    BotonEditar.onclick=function (){
                    editar(this.parentNode.parentNode);
                        
                }
                    
                    //Click en Borrar.
                    
                    var BotonBorrar=tr.getElementsByTagName("button")[1];
                    
                    BotonBorrar.onclick=function (){
                    cancelar(this.parentNode.parentNode);
                        
                }
                    
                    
                    
                    
                }
                //alert("Guardar");
            }
            function cancelar(fila){
                //Eliminar fila, tengo que situarme un nivel por encima...
                fila.parentNode.removeChild(fila);
                //alert("Cancelar");
            }
        
            function editar(fila){
                //coger el valor del input
                var Valortd1Edit=fila.getElementsByTagName("td")[0].innerHTML;
                //alert(Valortd1Edit);
                //
                /*
                var inputExtraido=tr.getElementsByTagName("input")[0];
                inputExtraido.parentNode.removeChild(inputExtraido);
                */
                var principal=fila.getElementsByTagName("td")[0];
                var hijoNecesario=principal.firstChild;
                //var td1Edit=fila.getElementsByTagName("td")[0].value;
                hijoNecesario.parentNode.removeChild(hijoNecesario);
         
                var nuevoInputEditar=document.createElement("input");
                var hijoInput=principal.appendChild(nuevoInputEditar);
                
                hijoInput.value=Valortd1Edit;
                /*var textoHijoInput=document.createTextNode(Valortd1Edit);
                hijoInput.appendChild(textoHijoInput);*/
                //var hijoInputEdit=td1Edit.appendChild(nuevoInputEdit);
                //hijoInputEdit.value=
                //hijoInputEdit.innerHTML(Valortd1Edit);
                //var valorRenovado=document.createTextNode(Valortd1Edit);
                //hijoInputEdit.appendChild(valorRenovado);
                
                //select Edad
                var datoSelect=fila.getElementsByTagName("td")[1].innerHTML;
                
                var SelectEdit=fila.getElementsByTagName("td")[1];
                var hijoNecesario2=SelectEdit.firstChild;
                hijoNecesario2.parentNode.removeChild(hijoNecesario2);
                
                var select=document.createElement("select");
                var hijoNuevo=SelectEdit.appendChild(select);
                
                var optionNuevo=document.createElement("option");
                var blanco=hijoNuevo.appendChild(optionNuevo);
                var textoBlanco=document.createTextNode("");
                blanco.appendChild(textoBlanco);
                cont=10;
                while(cont<=65){
                    
                    var option=document.createElement("option");
                    var hijoSubNuevo=hijoNuevo.appendChild(option);
                    
                    var text=document.createTextNode(cont);
                    var hijoSubNuevo2=hijoSubNuevo.appendChild(text);
                    cont++;
                }
                
                //select genero
                var Select2=fila.getElementsByTagName("td")[2];
                var hijoNecesario3=Select2.firstChild;
                hijoNecesario3.parentNode.removeChild(hijoNecesario3);
                
                
                
                
                 var select2=document.createElement("select");
                var hijoNuevo2=Select2.appendChild(select2);
                
                var optionBlanco=document.createElement("option");
                var generoBlanco=hijoNuevo2.appendChild(optionBlanco);
                var blancoBlanco=document.createTextNode("");
                generoBlanco.appendChild(blancoBlanco);
                
                var option2=document.createElement("option");
                var hijoSubNuevo2=hijoNuevo2.appendChild(option2);
                
                
                
                var text1=document.createTextNode("Varón");
                var hijoSubNew3=hijoSubNuevo2.appendChild(text1);
                
                var option3=document.createElement("option");
                var hijoSubNew4=hijoNuevo2.appendChild(option3);
            
                var text2=document.createTextNode("Mujer");
                var hijoSubNew5=hijoSubNew4.appendChild(text2);
                
                //secreto
                //no se hace nada
                
                //boton editar pasar a guardar
                var editarCambio=fila.getElementsByTagName("button")[0];
                editarCambio.removeChild(editarCambio.firstChild);
                
                var BotonGuardar2=document.createTextNode("Guardar");
                editarCambio.appendChild(BotonGuardar2);
                
                //Click en guardar
                
                var BotonGuardar3=fila.getElementsByTagName("button")[0];
                    
                    BotonGuardar3.onclick=function (){
                    guardar(this.parentNode.parentNode);
                }
                    
                var editarCambio=fila.getElementsByTagName("button")[1];
                editarCambio.removeChild(editarCambio.firstChild);
                
                var BotonCancelar2=document.createTextNode("Cancelar");
                editarCambio.appendChild(BotonCancelar2);    
                    
            }
            
            function addVariosAlumnos(){
                
                
                var variosAlumnos=document.getElementById("area");
                var areaTexto=document.createElement("textarea");
                variosAlumnos.appendChild(areaTexto);
                
                
                var botonHecho=document.createElement("button");
                variosAlumnos.appendChild(botonHecho);
                
                var textoBotonHecho=document.createTextNode("Hecho");
                botonHecho.appendChild(textoBotonHecho);
                
                botonHecho.onclick=function(){
                    hecho(this.parentNode);
                }
                
                
                var botonCancelar=document.createElement("button");
                variosAlumnos.appendChild(botonCancelar);
                
                var textoBotonCancelar=document.createTextNode("Cancelar");
                botonCancelar.appendChild(textoBotonCancelar);
                
                botonCancelar.onclick=function(){
                    cancelarDiv(this.parentNode);
                }
                
                
                
                
            }
            function cancelarDiv(caja){
               
                var cajaTextoExtraido=caja.getElementsByTagName("textarea")[0];
                cajaTextoExtraido.parentNode.removeChild(cajaTextoExtraido);
                
                var botonExtraido=caja.getElementsByTagName("button")[0];
                botonExtraido.parentNode.removeChild(botonExtraido);
                
                var boton2Extraido=caja.getElementsByTagName("button")[0];
                boton2Extraido.parentNode.removeChild(boton2Extraido);
                
            }
            function hecho(caja){
                var conten=new Array();
                var contenido=caja.getElementsByTagName("textarea")[0].value+"\n";
                
                
                
                for(var j=0, ini=0,z=0;j<contenido.length;j++){
                    if(contenido.charAt(j)=='\n'){
                        conten[z]=contenido.substring(ini,j)
                        ini=j+1;
                        z++;
                    }
                }
                
                for(var i=0;i<conten.length;i++){
                    
                    addAlumno(conten[i]);
                
                }
                
                
            }