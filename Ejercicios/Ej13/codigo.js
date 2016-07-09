function ventanaNueva(id){	
			
    miVentana=window.open(id+".jpg","miventana"+id,"top=20,left=20,width=410,height=310");
    miVentana.document.getElementsByTagName("img")[0].onclick= function (){window.close()};
				
}