function mostrar()
{
    var notas;
    var sexo;
    var sumaNotas;
    var cantidadAlumnos;
    var promedioNotas;
    var cantidadMasculino;
    var notaMasBaja;
    var sexoNotaBaja;

    notas=0;
    sumaNotas=0;
    promedioNotas=0;
    cantidadAlumnos=0;
    cantidadMasculino=0;

    while (cantidadAlumnos<5)
    {
        cantidadAlumnos++;
        nota=prompt("Ingrese la nota del 0 al 10");
        nota=parseInt(nota);
        
        while(nota < 0 || nota > 10)
        {
			nota=prompt("error, Reingrese la nota del 0 al 10");
			nota=parseInt(nota);
        }
        
        sexo=prompt("Ingrese f ó m .");

        while(sexo!="f" && sexo!="m")
        {
            sexo = prompt("Reingrese f ó m .");
        }
        
        if (cantidadAlumnos == 1)
        {
			notaMasBaja=nota;
			sexoNotaBaja=sexo;
        }else
        {
            if ( nota<notaMasBaja) 
            {
				notaMasBaja=nota;
				sexoNotaBaja=sexo;
			}
		}
        if (sexo =="m" && nota>=6)
        {
			cantidadMasculino++;
        }
        sumaNotas=nota+sumaNotas;
    }
    promedioNotas=sumaNotas/cantidadAlumnos;

	alert("El promedio de las notas es "+promedioNotas);
	alert("la nota mas baja es "+notaMasBaja+" y el sexo es "+sexoNotaBaja);
	alert("La cantidad de varones con nota mayor a 6 es de "+cantidadMasculino);
}
