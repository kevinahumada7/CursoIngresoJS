/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var precioLampara;
     var cantidadLamparas;
     var marcaLamparas;
     var precioTotal;
     var precioFinal;
    var desc=1;
        precioLampara= 35;
        cantidadLamparas= document.getElementById("Cantidad").value;
        cantidadLamparas= parseInt(cantidadLamparas);
        marcaLamparas= document.getElementById("Marca").value;
        precioTotal= precioLampara*cantidadLamparas;

        switch(cantidadLamparas)
        {
            case 1:
            case 2:
                desc=0;
            break;
            
            case 5:
                switch(marcaLamparas)
                {
                    case "ArgentinaLuz":
                         desc=50;
                    break;
                    default:
                         desc=40;
                    break;
                }
                /*
                if(marcaLamparas=="ArgentinaLuz")
                {
                    desc=50;
                }else
                {
                    desc=40;
                }*/
                break;
            case 4:
                switch(marcaLamparas)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        desc=30;
                    break;
                    default:
                        desc=20;
                    break;
                }
                /*
                if(marcaLamparas=="ArgentinaLuz" ||marcaLamparas=="FelipeLamparas" )
                {
                    desc=30;
                }else
                {
                    desc=20;
                }*/
            break;
            case 3:
                if(marcaLamparas=="ArgentinaLuz")
                {
                    desc=15;
                }else
                {
                    if(marcaLamparas=="FelipeLamparas")
                    {   
                        desc=10;
                    }else
                    {
                        desc=5;
                    }
                }

            break;
            default:
                desc=50;
            break;


        }// switch(cantidadLamparas)



        if (cantidadLamparas>=6)
        {
              desc=0.50;
        }else
        {
            if(cantidadLamparas==5)
            {
                if(marcaLamparas=="ArgentinaLuz")
                {
                    desc=50;
                }else
                {
                    desc=50;
                }

            }else
            {
                if(cantidadLamparas==4)
                {
                    if(marcaLamparas=="ArgentinaLuz" ||marcaLamparas=="FelipeLamparas" )
                    {
                        desc=50;
                    }else
                    {
                        desc=50;
                    }



                }else
                {
                    if(cantidadLamparas==3)
                    {
                        if(marcaLamparas=="ArgentinaLuz")
                        {
                            desc=50;
                        }else
                        {
                            if(marcaLamparas=="FelipeLamparas")
                            {   
                                desc=50;
                            }else
                            {
                                desc=50;
                            }
                        }
                    }

                }// if(cantidadLamparas==4)
            }// if(cantidadLamparas==5)
        }//if (cantidadLamparas>=6)
        
        precioFinal= precioTotal*desc;
        
       

/*        if (precioFinal>=120) {
            precioFinal= precioTotal+(precioTotal*10/100);
            alert("IIBB Usted pago $"+precioFinal);
        }
*/        
        

            

        

        document.getElementById("precioDescuento").value=precioFinal;
        
}
