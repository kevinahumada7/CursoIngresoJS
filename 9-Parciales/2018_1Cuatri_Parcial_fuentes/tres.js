function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;

    precio= prompt("Ingreso precio:");
    descuento= prompt("Ingrese descuento");

    precio= parseInt(precio);
    descuento= parseInt(descuento);

    precioFinal= precio-(precio*descuento/100);

    document.getElementById("elPrecioFinal").value= precioFinal;
}
