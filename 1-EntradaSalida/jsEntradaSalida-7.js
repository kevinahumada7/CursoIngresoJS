/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numeroUno;
    var numeroDos;
    var resultadosuma;
    numeroUno= document.getElementById("numeroUno").value;
    numeroDos= document.getElementById("numeroDos").value;
    resultadosuma= parseInt(numeroUno)+parseInt(numeroDos);
    alert("La suma es "+resultadosuma);
}

function restar()
{
    var numeroUno;
    var numeroDos;
    var resultadoresta;
    numeroUno= document.getElementById("numeroUno").value;
    numeroDos= document.getElementById("numeroDos").value;
    resultadoresta= parseInt(numeroUno)-parseInt(numeroDos);
    alert("La resta es "+resultadoresta);
}

function multiplicar()
{ 
    var numeroUno;
    var numeroDos;
    var resultadomultiplicar;
    numeroUno= document.getElementById("numeroUno").value;
    numeroDos= document.getElementById("numeroDos").value;
    resultadomultiplicar= parseInt(numeroUno)*parseInt(numeroDos);
    alert("La multiplicación es "+resultadomultiplicar);
}

function dividir()
{
    var numeroUno;
    var numeroDos;
    var resultadodividir;
    numeroUno= document.getElementById("numeroUno").value;
    numeroDos= document.getElementById("numeroDos").value;
    resultadodividir= parseInt(numeroUno)/parseInt(numeroDos);
    alert("La división es "+resultadodividir);
}

