function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;

alert (mesDelAño);

    switch (mesDelAño)
    {
        case "Julio":
        case "Agosto":
            mensaje="Abrigate que hace frio"
        break;
        
        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Julio":
            mensaje="Falta para el invierno"
        break;

        default:
            mensaje="Ya pasamos el frio, ahora calor!!!.";
        break;
    }
alert(mensaje);




}//FIN DE LA FUNCIÓN