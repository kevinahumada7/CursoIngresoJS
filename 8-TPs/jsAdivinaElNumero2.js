/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var mensaje;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 numeroSecreto= Math.floor(Math.random()*100)+1;
		console.log("El numero secreto es: "+numeroSecreto);
	 contadorIntentos=0
}

function verificar()
{
	var numeroIngresado;
		numeroIngresado= numero.value
		console.log("El numero ingresado es: "+numeroIngresado);
	
	if (numeroIngresado==numeroSecreto)
	{
		switch(contadorIntentos)
		{
			case 1:
				mensaje="Usted es un Psíquico"
			break;//PRIMER INTENTO
			case 2:
				mensaje="Excelente Percepción"
			break;//SEGUNDO INTENTO
			case 3:
				mensaje="Esto es Suerte"
			break;//TERCER INTENTO
			case 4:
				mensaje="Esto es Técnica"
			break;//CUARTO INTENTO

		}
	}
		
	
	

}