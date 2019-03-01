function mostrar()
{
    var cantidadVehiculos;
    var velocidades;
    var sumaVelocidades;
    var promedioVelocidades;
    var tipoCombustible;
    var tipoCombustibleMasBaja;
    var velocidadMasBaja;
    var velocidadMasAlta;
    var cantidadL;

    cantidadVehiculos=0;
    promedioVelocidades=0;
    sumaVelocidades=0;
    cantidadL=0;

    while (cantidadVehiculos<5)
    {
        cantidadVehiculos++;

        velocidades= prompt("Ingresar velocidad del vehiculo  entre 0 y 250");
        velocidades= parseInt(velocidades);

        while (velocidades<0 || velocidades>250)
        {
            velocidades= prompt("Error! Solo puede ingresar velocides entre 0 y 250");
            velocidades= parseInt(velocidades);
        }

        tipoCombustible= prompt('Ingresar tipo de combustible: s/l "(solido/liquido)"');
        
        while (tipoCombustible!="s" && tipoCombustible!="l")
        {
            tipoCombustible= prompt('Error! Solo puede ingresar tipos de combustible "s" o "l"');
        }

        if(cantidadVehiculos==1)
        {
            velocidadMasBaja= velocidades;
            tipoCombustibleMasBaja= tipoCombustible;
            velocidadMasAlta= velocidades;
        }else
        {
            if(velocidades<velocidadMasBaja)
            {
                velocidadMasBaja= velocidades;
                tipoCombustibleMasBaja= tipoCombustible;
            }else
            {
                if(velocidades>velocidadMasAlta && tipoCombustible=="s")
                {
                    velocidadMasAlta= velocidades;
                }
            }
        }
        if (tipoCombustible=="l" && velocidades>=100)
        {
            cantidadL++;
        }

        sumaVelocidades= sumaVelocidades+velocidades;
        promedioVelocidades= sumaVelocidades/cantidadVehiculos;
    }
    //(225+75+50+170+90)/5=122
    console.log("El promedio de las velocidades es: "+promedioVelocidades+"km/h");
    console.log("La velocidad mas baja es "+velocidadMasBaja+"km/h y su tipo de combustible es "+tipoCombustibleMasBaja);
    console.log("La cantidad de vehiculos que usan combustible liquido y superan los 100km/h es: "+cantidadL);
    console.log("La velocidad mas alta con combustible solido es: "+velocidadMasAlta+"km/h");
}
