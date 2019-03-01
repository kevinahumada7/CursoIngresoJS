function mostrar()
{
	var contador;
	var respuesta;
	var numeroIngresado;
	var sumaPositivos;
	var cantidadPositivos;
	var sumaNegativos;
	var cantidadNegativos;
	var cantidadPares;
	var cantidadCeros;
	var promedioPositivos;
	var promedioNegativos;

	//declarar contadores y variables 
	contador=0;
	respuesta="si";
	sumaPositivos=0;
	cantidadPositivos=0;
	sumaNegativos=0;
	cantidadNegativos=0;
	cantidadPares=0;
	cantidadCeros=0;
	promedioPositivos=0;
	promedioNegativos=0;

	while(respuesta!="no")
	{
		numeroIngresado= prompt("Ingrese numero");
		numeroIngresado= parseInt(numeroIngresado);

		if (numeroIngresado==0)
		{
			cantidadCeros++;
			
		}else
		{
			if (numeroIngresado>0)
			{
				sumaPositivos= sumaPositivos+numeroIngresado;
				cantidadPositivos++;
				
			}else
			{
				if (numeroIngresado<0)
				{
					sumaNegativos= sumaNegativos+numeroIngresado;
					cantidadNegativos++;
					
				}	
			}
		}
		
		if (numeroIngresado%2==0 && numeroIngresado!=0)
		{
			cantidadPares++;
		}
		promedioPositivos= sumaPositivos/cantidadPositivos;
		promedioNegativos= sumaNegativos/cantidadNegativos;
		respuesta= prompt("Desea seguir ingresando numeros? si/no");
	}
console.log("La suma de los negativos es: "+sumaNegativos+"\nLa suma de los positivos es: "+sumaPositivos+"\nCantidad de numeros positivos: "+cantidadPositivos+"\nCantidad de numeros negativos: "+cantidadNegativos+"\nCantidad de numeros pares: "+cantidadPares);
console.log(promedioNegativos);
console.log(promedioPositivos);
		


}//FIN DE LA FUNCIÓN