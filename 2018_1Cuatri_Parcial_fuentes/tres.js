function mostrar()
{
    var precio, descuento, resultado;
    precio= prompt("Ingresar precio");
    descuento= prompt("Ingresar descuento");
    resultado= parseInt(precio)-(precio*descuento/100);
    document.getElementById("elPrecioFinal").value= parseInt(resultado);
}
