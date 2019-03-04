function mostrar()
{
    var continuar;
    var cantidadPaises;
    var cantidadPaisesMenorCien;
    var cantidadPaisesIgualCien;
    var pais;
    var primerMayorCien;
    var superficieTerritorio;
    var cantidadSuperficieImpar;
    var sumaSuperficie;
    var promedioKilometros;
    var menorTerritorio;
    var nombreMenorTerritorio;

    continuar="si";
    superficieTerritorio= 0;
    cantidadSuperficieImpar= 0;
    cantidadPaisesMenorCien= 0;
    cantidadPaisesIgualCien=0;
    sumaSuperficie=0;

    while(continuar!="no")
    {
        pais= prompt("Ingrese el nombre de un pais:");
        superficieTerritorio= prompt("Ingrese superficie del territorio");
        superficieTerritorio= parseInt(superficieTerritorio);

            while(superficieTerritorio<0)
            {
                superficieTerritorio= ("Error! Reingrese la superficie del territorio");
                superficieTerritorio= parseInt(superficieTerritorio);
            }

        if (superficieTerritorio%2==1)
        {
            cantidadSuperficieImpar++;
        }

        if (cantidadPaises==1)
        {
            primerMayorCien=pais;
            nombreMenorTerritorio=pais;
            menorTerritorio=superficieTerritorio;
        }else
        {
            if(superficieTerritorio<100)
            {
                cantidadPaisesMenorCien++;
                menorTerritorio=superficieTerritorio;
            }else
            {
                if(superficieTerritorio==100)
                {
                cantidadPaisesIgualCien++;
                menorTerritorio=superficieTerritorio;
                }else
                {
                    primerMayorCien=pais;
                    nombreMenorTerritorio=superficieTerritorio;
                }
            }
        }
        if (superficieTerritorio<menorTerritorio)
        {
            nombreMenorTerritorio=pais;
        }
        sumaSuperficie= sumaSuperficie+superficieTerritorio;
        promedioKilometros= sumaSuperficie/cantidadPaises;
        continuar= prompt("Desea continuar");
        cantidadPaises++;
    }
    console.log("Cantidad de paises con superficie impar: "+cantidadSuperficieImpar);
    console.log("Cantidad de paises con superficie menor a 100 es: "+cantidadPaisesMenorCien);
    console.log("La cantidad de países con superficie igual a 100 es: "+cantidadPaisesIgualCien);
    console.log("El nombre del primer país que superó los 100 de superficie: "+primerMayorCien);
    console.log("El promedio de kilómetros ingresados es: "+promedioKilometros);
    console.log("El nombre del que menos territorio tiene: "+nombreMenorTerritorio);


}
/*
Realizar el algoritmo que permita iterar el ingreso de dos datos, un país y la
superficie de su territorio (validar) hasta que el usuario quiera e informar al terminar
el ingreso por document.write:
1-La cantidad de países con superficie impar.
2-La cantidad de países con superficie menor a 100
3-La cantidad de países con superficie igual a 100
4-El nombre del primer país que superó los 100 de superficie
5-El promedio de kilómetros ingresados.
6-El nombre del que menos territorio tiene.
*/