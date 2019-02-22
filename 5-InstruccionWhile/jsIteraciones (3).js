function mostrar()
{

    var clave = prompt("ingrese el número clave.");
    var intentos
        intentos=0
    while(clave!="utn750" && intentos<2)
    {
        clave=prompt("Ingrese el numero clave");
        ++intentos;
            alert("Ha excedido la cantidad de intentos")
    }

}//FIN DE LA FUNCIÓN
