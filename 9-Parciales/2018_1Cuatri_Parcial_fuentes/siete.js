function mostrar()
{
    var notas;
    var sexoF;
    var sexoM;
    var sumaNotas;
    var cantidadAlumnos;
    var promedioNotas;

    notas=0;
    sumaNotas=0;
    promedioNotas=0;
    cantidadAlumnos=0;
    sexoF="f";
    sexoM="m";

    while (cantidadAlumnos<5)
    {
        cantidadAlumnos++;
        sexo= prompt("Ingrese sexo del alumno: f/m");
        notas= prompt("Ingrese nota del alumno:");
        notas= parseInt(notas);

        if (notas>=1 && notas<=10)
        {
            sumaNotas= sumaNotas+notas;
            promedioNotas= sumaNotas/cantidadAlumnos;
        }
    }
    console.log(sumaNotas);
    console.log(cantidadAlumnos);
    console.log(promedioNotas);
}
