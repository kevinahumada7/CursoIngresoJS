function mostrar()
{
    var numeroDeAmigos, precioComida, precioDividido, propina, precioTotalDividido, iva, precioFinal;

        numeroDeAmigos= prompt("Ingresar numero de amigos");
        precioComida= prompt("Ingresar precio total");

        precioDividido= precioComida/numeroDeAmigos;
        propina= precioDividido*0.10;
        iva= precioComida*0.21;
        precioTotalDividido=precioDividido+propina+(iva/numeroDeAmigos);
        precioFinal= precioTotalDividido*numeroDeAmigos;

            alert("El numero de amigos es "+numeroDeAmigos+" y deben pagar $"+precioDividido+" cada uno, y la propina sería de $"+propina+" cada uno.\n En TOTAL cada uno deberia pagar $"+precioTotalDividido+" incluyendo IVA.\n El precio final es $"+precioFinal);
}
