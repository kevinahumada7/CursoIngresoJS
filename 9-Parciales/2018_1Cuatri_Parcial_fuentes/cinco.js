function mostrar()
{
    var planeta;
    var mensaje;

    planeta= prompt("Ingresar el nombre de un planeta del Sistema Solar");

    switch (planeta)
    {
        case "mercurio":
        case "venus":
            mensaje= "Acá hace más calor";
        break;

        case "tierra":
            mensaje= "Acá vivimos";
        break;

        case "marte":        
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            mensaje="Acá hace más frio";
        break;

        default:
            mensaje= "Este no es un planeta valido";
        break;
    }
    alert(mensaje);
}
