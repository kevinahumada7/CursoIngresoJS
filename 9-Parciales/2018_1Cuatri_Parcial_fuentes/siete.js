function mostrar()
{
    var nota;
    var alumnos;
    var sexo;
    var sumaNotas;
    var promedioNotas;
    var notaMasBaja;
    var sexoMasBaja;
    var cantidadVarones;
    
    alumnos=0;
    sumaNotas=0;
    notaMasBaja=0;
    cantidadVarones=0;
    
    while (alumnos<5)
    {
        nota= prompt("Ingresar nota del alumno");
        nota= parseInt(nota);
        
        while (nota<0 || nota>10)
        {
            nota= prompt("Error! Reingrese la nota del alumno");
            nota= parseInt(nota);
        }
        
        sexo= prompt("Ingresar sexo del alumno");
        
        while (sexo!="f" && sexo!="m")
        {
            sexo= prompt("Error! vuelva a ingresar el sexo del alumno");
        }

        if (alumnos==0)
        {
            notaMasBaja= nota;
            sexoMasBaja= sexo;

        }else
        {
            if (nota<notaMasBaja)
            {
                notaMasBaja= nota;
                sexoMasBaja= sexo;
            }
        }
        if (sexo=="m" && nota>=6)
        {
            cantidadVarones++;
        }

        alumnos++;
        
        sumaNotas= sumaNotas+nota;
        promedioNotas= sumaNotas/alumnos;
    }
    alert("La suma de las nota es "+sumaNotas+" y el promedio es: "+promedioNotas);
    alert("La nota mas baja fue "+notaMasBaja+" y el sexo del alumno es "+sexoMasBaja);
    alert("La cantidad de varones con nota mayor o igual a seis es: "+cantidadVarones);
}