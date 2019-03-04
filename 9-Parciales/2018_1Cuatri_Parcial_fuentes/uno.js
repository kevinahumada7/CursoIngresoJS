
function mostrar()
{   
    var largo;
    var ancho;
    var perimetro;

    largo= prompt("Ingrese largo del rectangulo");
    ancho= prompt("Ingrese ancho del rectangulo"); 
    largo= parseInt(largo);
    ancho= parseInt(ancho);

    perimetro= 2*(largo+ancho);

    alert("El perimetro del rectangulo es "+perimetro);
}
