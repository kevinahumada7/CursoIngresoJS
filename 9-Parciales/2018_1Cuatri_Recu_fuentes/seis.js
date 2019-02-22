function mostrar()
{
    var precioHabitacion;
    var metodoDePago;
    var paquete;
    var descuentoDePaquete;
    var descuentoDeTarjeta;
    var descuentoTotal;
    var precioFinal;

        precioHabitacion= prompt("Ingresar precio de la habitación:");
        precioHabitacion= parseInt(precioHabitacion);
        metodoDePago= prompt("Ingresar metodo de pago entre las siguientes tarjetas:\n Visa\n Paypal\n MercadoPago\n Efectivo\n Otros Medios");
        paquete= prompt("Ingresar paquete:\n todoIncluido o todoDesayuno");

    switch(metodoDePago)
    {
        case "Visa":
            descuentoDeTarjeta=0.90;
        break;

        case "PayPal":
            descuentoDeTarjeta=0.85;
            if (paquete="todoIncluido")
            {
                descuentoDePaquete=0.10;
            }
        break;

        case "MercadoPago":
            descuentoDeTarjeta=0.90;
        break;

        case "Efectivo":
            descuentoDeTarjeta=0.80;
            if (paquete="todoIncluido")
            {
                descuentoDePaquete=0.15;
            }else
            {
                if(paquete="soloDesayuno")
                {
                    descuentoDePaquete=0.10;
                }
            }
        break;

        default:
            descuentoDeTarjeta=0.95;
        break;
    }

    descuentoTotal=descuentoDeTarjeta+descuentoDePaquete;
    precioFinal=precioHabitacion*descuentoTotal;
    
    alert("El precio de la habitacion es $"+precioHabitacion+"\nEl descuento por usar la tarjeta "+metodoDePago+" y elejir el paquete "+paquete+" es: "+descuentoTotal*100+"%\nEl precio final es $"+precioFinal);
}
