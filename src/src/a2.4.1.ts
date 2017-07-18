interface Konto {
    readonly type: string;
    owner: { name: string, age: number };
    saldo: number;
    comments?: string[]
}

let openKto = function (kto: Konto) {
    console.log(`${kto.type} wird eröffnet für ${kto.owner.name}(${kto.owner.age})
     mit einer Ersteinlage von ${kto.saldo}`);
    if (kto.comments) {
        for (let c of kto.comments) {
            console.log(c)
        }
    }
}

openKto({ 
    type: "Giro", 
    owner: { name: "Martin", age: 45 }, 
    saldo: 1000, 
    comments: ["Kommentar1"] });