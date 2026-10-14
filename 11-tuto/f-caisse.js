let mots = ["chat", "ordinateur", "table", "programmation", "js"];

let count = 0;

for(let i = 0; i < mots.length; i++)
{
    if(mots[i].length > 5)
    {
        count++;
    }
}

console.log(count);


let nombres = [4, 7, 2, 9, 5, 8];

let sommePairs = 0;

for(let i = 0; i < nombres.length; i++)
{
    if(nombres[i] % 2 == 0)
    {
        sommePairs = sommePairs + nombres[i];
    }
}

console.log(sommePairs);



