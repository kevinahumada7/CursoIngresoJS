function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var aleatorio = Math.floor(Math.random()*10)+1;
		
			if (aleatorio>=9) {
			
				alert("Nota: "+aleatorio+"\nEXCELENTE!")
			
			} else {
				
				if (aleatorio>=4 && aleatorio<9) {
					
					alert("Nota: "+aleatorio+"\nAPROBÓ!")
				
				} else {
					
					alert("Nota: "+aleatorio+"\nVamos, la proxima se puede!")
				
				}
				
			}


}//FIN DE LA FUNCIÓN