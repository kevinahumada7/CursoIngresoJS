function mostrar()
{
//tomo la edad  
var edad;
edad= document.getElementById("edad").value;
if(edad>=13 && edad<=17)
    {
        alert("Eres un adolecente y no puedes acceder a la informacion");
    }
else
    {
        alert("Informacion");
    }

}//FIN DE LA FUNCIÓN