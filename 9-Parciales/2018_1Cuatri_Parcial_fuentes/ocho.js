function mostrar()
{
    var letra;
    var numero;
    var continuar;
    var cantidadPares;
    var cantidadImpar;
    var cantidadCeros;
    var contadorPositivos;
    var sumaNumerosPositivos;
    var sumaNumerosNegativos;
    var promedioNumeros;
    var letraMaximo;
    var numeroMaximo;
    var letraMinimo;
    var numeroMinimo;

    
    contadorPositivos= 0;
    continuar= "si";
    cantidadPares= 0;
    cantidadImpar= 0;
    cantidadCeros= 0;
    sumaNumerosPositivos= 0;
    sumaNumerosNegativos=0;
    numeroMinimo= 0;
    numeroMaximo= 0;
    
    while (continuar!="no")
    {
        letra= prompt("Ingresar letra");
        numero= prompt("Ingresar numero entre -100 y 100");
        numero= parseInt(numero);

        while (numero<-100 || numero>100)
        {
            numero= prompt("Error! Reingresar numero entre -100 y 100");
        }
        
        if (numero%2==0 && numero!=0)
        {
            cantidadPares++;
        }else
        {
            if ((numero%2==1 || numero%2==-1) && numero!=0)
            {
                cantidadImpar++;
            }
        }

        if (numero==0)
        {
            cantidadCeros++;
        }else
        {
            if (numero>0)
            {
                contadorPositivos++;
                sumaNumerosPositivos= sumaNumerosPositivos+numero;
            }else
            {
                if (numero<0)
                {
                    sumaNumerosNegativos= sumaNumerosNegativos+numero;
                }
            }
        }
        if (numeroMinimo>numero)
        {
            numeroMinimo=numero;
            letraMinimo=letra;
        }else{
            if (numeroMaximo<numero)
            {
                numeroMaximo= numero;
                letraMaximo= letra;
            }
        }


        promedioNumeros= sumaNumerosPositivos/contadorPositivos;

        


        continuar=prompt('Ingresar "no" para salir');
    }
    console.log("La cantidad de numeros par: "+cantidadPares);
    console.log("La cantidad de numeros impar: "+cantidadImpar);
    console.log("La cantidad de ceros: "+cantidadCeros);
    console.log("La suma de los numeros positivos da "+sumaNumerosPositivos+" y el promedio es: "+promedioNumeros);
    console.log("La suma de numeros negativos: "+sumaNumerosNegativos);
    console.log("El numero minimo es "+numeroMinimo+" y la letra "+letraMinimo);
    console.log("El numero maximo es "+numeroMaximo+" y la letra "+letraMaximo);
}
