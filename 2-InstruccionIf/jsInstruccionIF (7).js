function mostrar()
{
//tomo la edad  
    var edad, estadoCivil;
    edad= document.getElementById("edad").value;
    estadoCivil= document.getElementById("estadoCivil");
        if (edad<18 && estadoCivil.selectedIndex!=0) {
            alert("Eres muy pequeño para NO ser soltero")
        }
        else {
            alert("Es normal")
        }



}//FIN DE LA FUNCIÓN