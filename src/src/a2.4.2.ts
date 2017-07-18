export{}

function calculateInterest(cap: number, procentPoints: number = baseInterest) :number {
    return cap * procentPoints / 100;
}

interface Konto {
    readonly type: string;
    owner: { name: string, age: number };
    saldo: number;
    comments?: Comments]
}

let openKto = function (kto: Konto) {
    console.log(`${kto.type} wird eröffnet für ${kto.owner.name}(${kto.owner.age})
     mit einer Ersteinlage von ${kto.saldo}`);
    if (kto.comments) {
        for (let c in kto.comments) {
            console.log(c + " : "+kto.comments[c])
        }
    }
}

openKto({
    type: "Giro",
    owner: { name: "Martin", age: 45 },
    saldo: 1000,
    comments: {ID324: "Kommentar1"}
});


interface ZinsFunction{
    (cap: number, percent: number): void
}
let zinsF : ZinsFunction = calculateInterest;

interface Comments{
    [index: string]:string;
}