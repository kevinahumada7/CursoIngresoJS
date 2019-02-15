
function mostrar()
{
    var mascotaUno, mascotaDos, pesoUno, pesoDos, resultadoPeso;

        mascotaUno= prompt("Ingresar el nombre de tu mascota 1: ");
        pesoUno= prompt("Ingresar peso de "+mascotaUno);

        mascotaDos= prompt("Ingresar el nombre de tu mascota 2: ");
        pesoDos= prompt ("Ingresar peso de "+mascotaDos);

        pesoUno= parseInt(pesoUno);
        pesoDos= parseInt(pesoDos);

        resultadoPeso= pesoUno+pesoDos;
        
        alert("Tenes dos mascotas "+mascotaUno+" y "+mascotaDos+" que pesan "+pesoUno+" y "+pesoDos+" kilos, la suma de los kilos es "+resultadoPeso);

}
