function mostrar()
{
  var precioCompra, iva, precioDescontado, precioFinal;

    precioCompra= document.getElementById("elNombre").value;

    precioCompra=parseInt(precioCompra);
    
    precioDescontado= precioCompra-(precioCompra*10/100);
    iva= precioCompra*21/100;
    
    precioFinal= precioDescontado+iva;

      alert("Tu compra es de $"+precioCompra+", tenes un descuento del 10%, queda en $"+precioDescontado+", mas el iva es $"+precioFinal);
        
}
