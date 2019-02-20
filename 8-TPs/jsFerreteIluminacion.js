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
     var precioLampara, cantidadLamparas, marcaLamparas, precioTotal, precioFinal;

        precioLampara= 35;
        cantidadLamparas= document.getElementById("Cantidad").value;
        cantidadLamparas= parseInt(cantidadLamparas);
        marcaLamparas= document.getElementById("Marca").value;
        precioTotal= precioLampara*cantidadLamparas;

        if (cantidadLamparas>=6) {
                precioFinal= precioTotal-(precioTotal*50/100);
            }
        
        if (cantidadLamparas==5 && marcaLamparas=="ArgentinaLuz") {
                precioFinal= precioTotal-(precioTotal*40/100);
            } else {
                if (cantidadLamparas==5) {
                    precioFinal= precioTotal-(precioTotal*30/100);
                }
        }
        
        if (cantidadLamparas==4 && marcaLamparas=="ArgentinaLuz") {
                precioFinal= precioTotal-(precioTotal*25/100);
            } else {
                if (cantidadLamparas==4 && marcaLamparas=="FelipeLamparas") {
                    precioFinal= precioTotal-(precioTotal*25/100);
            } else {
                if (cantidadLamparas==4) {
                    precioFinal= precioTotal-(precioTotal*20/100);
                }
            }  
        }
        
        if (cantidadLamparas==3 && marcaLamparas=="ArgentinaLuz") { 
                precioFinal= precioTotal-(precioTotal*15/100);
            } else {
                if (cantidadLamparas==3 && marcaLamparas=="FelipeLamparas") {
                    precioFinal= precioTotal-(precioTotal*10/100);
            } else {
                if (cantidadLamparas==3) {
                    precioFinal= precioTotal-(precioTotal*5/100);
                }
            }  
        }

        if (cantidadLamparas<=2) {
            precioFinal= precioTotal
        }

/*        if (precioFinal>=120) {
            precioFinal= precioTotal+(precioTotal*10/100);
            alert("IIBB Usted pago $"+precioFinal);
        }
*/        
        

            

        

        document.getElementById("precioDescuento").value=precioFinal;
        
}
