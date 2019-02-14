function mostrar()
{
//tomo la edad  
    var edad;
    edad=document.getElementById("edad").value;

        if (edad<=13) {
            
            alert("Eres un niño");

        } else {
            if (edad<=17){

                alert("Eres un adolecente")

            } else {
                
                alert("Eres mayor de edad")
            }
        }
}//FIN DE LA FUNCIÓN