function mostrar()
{

	var contador;
	var numeroMax;
	var numeroMin;
	var respuesta;
	var numeroIngresado;
		// declarar variables
	
		contador=0;
		respuesta='si';
		numeroMax=-9999;
		numeroMin=9999;

	while(respuesta!='no')
	{
		numeroIngresado= prompt("Ingrese numero");
		numeroIngresado= parseInt(numeroIngresado);

		if (numeroIngresado>numeroMax)
		{
			numeroMax= numeroIngresado;
		}
		if (numeroIngresado<numeroMin)
		{
			numeroMin= numeroIngresado;
		}
		respuesta= prompt("Desea seguir ingresando numeros? si/no");

	}
	maximo.value= numeroMax;
	minimo.value= numeroMin;



}//FIN DE LA FUNCIÓN