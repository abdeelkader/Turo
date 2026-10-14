let panier = [15, 42, 5, 89, 12, 50, 8];


let some = 0;

let some1 = 0;

let some2 = 0;


for(let i = 0; i < panier.length; i++)
{
    if(panier[i] > 0)
    {
        some = some + panier[i];
    }

    if(panier[i] > 20)
    {
        some1++;
    }

    if(panier[i] > 20)
    {
        some2 = some2 + panier[i];
    }
}

console.log("Total du panier :",some);

console.log("Nombre d'articles chers : ",some1);

console.log("Montant des articles chers : ",some2);

