function mostrar()
{
    var importeUno;
    var importeDos;
    var importeTres;
    var importeCuatro;
    var ImporteMayor;
    var precioTotal;
    var descuento;
    var precioFinal;

        importeUno=prompt("Ingresar 1er Importe");
        importeDos=prompt("Ingresar 2do Importe");
        importeTres=prompt("Ingresar 3er Importe");
        importeCuatro=prompt("Ingresar 4to Importe");

    importeUno=parseInt(importeUno);
    importeDos=parseInt(importeDos);
    importeTres=parseInt(importeTres);
    importeCuatro=parseInt(importeCuatro);

    precioTotal=importeUno+importeDos+importeTres+importeCuatro;

    if(precioTotal>=100)
    {
        descuento=0.90;
    }else
    {
        if(precioTotal>=50)
        {
            descuento=0.95;
        }else
        { 
            if(precioTotal<50)
            {
                descuento=1.15;
            }
        }
    }
    if (importeUno>=importeDos && importeUno>=importeTres && importeUno>=importeCuatro){
        ImporteMayor=importeUno;
    }else{
        if(importeDos>=importeTres && importeDos>=importeCuatro)
        {
            ImporteMayor=importeDos;
        }else
        {
            if(importeTres>=importeCuatro)
            {
                ImporteMayor=importeTres
            }else
            {
                ImporteMayor=importeCuatro
            }
        }
    }

    precioFinal=precioTotal*descuento;
    
    alert("El importe mayor es $"+ImporteMayor+"\nEl precio total es $"+precioTotal+"\nEl precio final es $"+precioFinal);
}
