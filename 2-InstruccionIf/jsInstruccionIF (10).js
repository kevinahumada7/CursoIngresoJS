function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var aleatorio = Math.round(Math.random()*10);

		alert("Nota: "+aleatorio);
		
			if (aleatorio>=9) {
			
				alert("EXCELENTE")
			
			} else {
				
				if (aleatorio>=4 && aleatorio<9) {
					
					alert("APROBÓ")
				
				} else {
					
					alert("Vamos, la proxima se puede")
				
				}

			}
			 
	}


}//FIN DE LA FUNCIÓN