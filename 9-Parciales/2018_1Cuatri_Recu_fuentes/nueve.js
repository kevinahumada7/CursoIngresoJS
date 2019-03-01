function mostrar()
{
    var continuar;
    var pais;
    var superficieTerritorio;

    continuar="si";

    while(continuar!="no")
    {

        pais= prompt("Ingrese el nombre de un pais:");
        superficieTerritorio= prompt("Ingrese superficie del territorio");
        superficieTerritorio= parseInt(superficieTerritorio);

            while(superficieTerritorio<0)
            {
                superficieTerritorio= ("Error! Reingrese la superficie del territorio");
                superficieTerritorio= parseInt(superficieTerritorio);
            }
        continuar= prompt("Desea continuar");
    }
}
