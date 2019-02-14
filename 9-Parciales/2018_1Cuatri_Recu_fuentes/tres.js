function mostrar()
{
    var precio, descuento, precioFinal;
    precio= prompt("Ingrese precio");
    descuento= prompt("Ingresar descuento");
    document.getElementById("elPrecioFinal").value= precio*descuento/100;
}
