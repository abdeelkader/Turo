let ventes = [110, 75, 150, 180, 90, 130, 100, 160];

let in_some = 0;

let some = 0;

let max = ventes[0];

let min = ventes[0];

let Exceptional = 0;

let Exceptional_some = 0;

for(let i = 0; i < ventes.length; i++)
{
    in_some++;

    if(ventes[i] > 0)
    {
        some = some + ventes[i];
    }

    if(ventes[i] < min)
    {
        min = ventes[i];
    }

    if(ventes[i] > max)
    {
        max = ventes[i];
    }


    if(ventes[i] >= 130)
    {
        Exceptional_some = Exceptional_some + ventes[i];
        Exceptional++;
    }


}

console.log("the total number of sales made : ", in_some);
console.log("the total turnover (the sum) : ", some);
console.log("the amount of the highest and lowest sale : ", max ,"|", min);
console.log("the numbeer of sales Exceptional : ", Exceptional);
console.log("the runover generated only by these excptional sales : ", Exceptional_some);


// The total number of sales made. 
// The total turnover (the sum).
// The amount of the highest (Maximum) and lowest (Minimum) sale.
// The number of sales “Exceptional”.
// The turnover generated only by these exceptional sales.