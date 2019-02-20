function mostrar()
{
    var cantidadLibro, precioLibro, metodoDePago, precioFinal, precioTotal;

        cantidadLibro= prompt("Ingrese cantidad de libros a comprar");
        precioLibro= prompt("Ingresar precio de los libros de cada libro");
        /*metodoDePago= confirm("Si paga con tarjeta, apretar boton (aceptar)\n si es en efectivo, apretar en (cancelar)");*/
        precioTotal= cantidadLibro*precioLibro;

            if(cantidadLibro>=2 && precioTotal<2000) {
                precioFinal= precioTotal-(precioTotal*10/100);
            } else {
                if (cantidadLibro>=2 && precioTotal>=2000) {
                    precioFinal= precioTotal-(precioTotal*15/100);
                }
            }/* if (metodoDePago=false) {
                precioFinal= precioTotal+(precioTotal*10/100);
            }   */
            
                alert("Usted compró "+cantidadLibro+" libros.\nEl precio final por los libros es $"+precioFinal);
}