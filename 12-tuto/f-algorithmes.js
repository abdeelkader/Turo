let prenoms = ["Ali", "Sara", "Yassine", "Nadia", "Karim"];

let search = "Nadia";

let position = -1;


for(let i = 1; i < prenoms.length; i++)
{
    if(prenoms[i] === search)
    {
        search = prenoms[i];
        position = i;
        break;
    }
}

// "Nadia se trouve à l'index 3"

if(position !== -1)
{
    console.log(search, "se trouve a l'index ", position);
}
else
{
    console.log("Prénom introuvable");
}


let notes = [12, 17, 9, 14, 18, 11];

let max = notes[0];
let min = notes[0];

let positionmax = 0;

let positionmin = 0;


for(let i = 1; i < notes.length; i++)
{
    if(notes[i] > max)
    {
        max = notes[i];
        positionmax = i;
    }

    if(notes[i] < min)
    {
        min = notes[i];
        positionmin = i;
    }
}

console.log("maximum :", max, "index : ", positionmax);

console.log("minimum : ", min, "index : ", positionmin);




