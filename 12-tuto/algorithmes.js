// Maximum : 42 (Index : 2)
// Minimum : 5 (Index : 7)
// La valeur 31 est présente dans le tableau.


let nombres = [23, 15, 42, 9, 31, 18, 42, 5];

let max = nombres[0];
let min = nombres[0];

let positionmax = 0;
let positionmin = 0;

let recherche = 31;
let posrecherche = -1;

for(let i = 1; i < nombres.length; i++)
{
    if(nombres[i] < min)
    {
        min = nombres[i];
        positionmin = i;
    }

    if(nombres[i] > max)
    {
        max = nombres[i]
        positionmax = i;
    }

    if(recherche === nombres[i])
    {
        posrecherche = recherche;
    }
}



// Maximum : 42 (Index : 2)
// Minimum : 5 (Index : 7)
// La valeur 31 est présente dans le tableau.


console.log("Maximum : ", max, "(index : ", positionmax,")");
console.log("Maximum : ", min, "(index : ", positionmin,")");



if(posrecherche !== -1)
{
    console.log("La valeur ", recherche, " est presente dans le tableau");
}
else 
{
    console.log("la valeur ", recherche, " est ne pas presente dand la tableau");
}