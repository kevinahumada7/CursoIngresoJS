function mostrar()
{
//tomo la edad  
var edad;
edad= document.getElementById("edad").value;

    if(edad<=13 || edad>=17) {

        alert("Informacion");
    
    } else {

        alert("Eres un adolecente y no puedes acceder a la informacion");
    
    }

}//FIN DE LA FUNCIÓN