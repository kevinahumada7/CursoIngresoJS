function mostrar()
{
//tomo la edad  
    var edad;
    edad=document.getElementById("edad").value;

        if (edad>=18) {
            alert("Eres mayor de edad");
        }   else if (edad>=13 && edad<=17) {            
                alert("Eres un adolecente");
            }   else if (edad<=13) {
                    alert("Eres un niño");
                }



}//FIN DE LA FUNCIÓN