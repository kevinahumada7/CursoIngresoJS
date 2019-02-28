function mostrar()
{
	var numeros;
	var contador;
	var positivo;
	var negativo;
	var respuesta;

	contador=0;
	positivo=0;
	negativo=1;
	respuesta='si';

	while(respuesta!="no")
	{
		contador++;
		respuesta=prompt("desea continuar?");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN