/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo, ancho, perimetro;
        largo= document.getElementById("Largo").value;
        ancho= document.getElementById("Ancho").value;
        perimetro= 2*largo+2*ancho;
            alert("Cantidad de alambre a comprar es "+perimetro*3);
}
function Circulo () 
{
    var largo, ancho, perimetro, radio;
    largo= document.getElementById("Largo").value;
    ancho= document.getElementById("Ancho").value;
    radio= document.getElementById("Radio").value;
        perimetro= 2*largo+2*ancho;
        

	
}
function Materiales () 
{
	
}