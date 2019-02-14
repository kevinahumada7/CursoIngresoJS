function mostrar()
{
    var precio, descuento, descuentoEnDinero, precioConDescuento, iva;
     precio= prompt("Ingrese el precio");
     descuento= prompt("Ingrese el descuento");
        descuentoEnDinero= precio*descuento/100;
        precioConDescuento= precio-descuentoEnDinero;
        iva= precio*21/100;
            alert("Dinero a descontar: $"+descuentoEnDinero+"\nPrecio con descuento: $"+precioConDescuento+"\nIVA: $"+iva);
    document.getElementById("elPrecioFinal").value= precioConDescuento-iva;
}
