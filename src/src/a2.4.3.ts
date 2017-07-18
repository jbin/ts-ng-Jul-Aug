export{}

let openKto = function (kto: Konto) {
    console.log(`${kto.type} wird eröffnet für ${kto.owner.name}(${kto.owner.age})`);
    if (kto.comments) {
        for (let c in kto.comments) {
            console.log(c + " : "+kto.comments[c])
        }
    }
}

interface Comments{
    [index: string]:string;
}

interface Konto {
    readonly type: string;
    owner: Person;
    comments?: Comments;
}

class GiroKonto implements Konto{
    public readonly type: string = "Girokonto";
    constructor(
        public owner: Person,
        private saldo: number,
        public comments?: Comments
    ){}
    
    showSaldo(){
        return this.saldo;  
    }
    einzahlen(betrag: number){
        this.saldo += betrag;
    }
    auszahlen(betrag: number){
        this.saldo-= betrag;
    }
}

let gkto: GiroKonto = new GiroKonto({name:"Jens", age: 99}, 100);
openKto(gkto);

class YoungGiro extends GiroKonto{
    static readonly ageLimit: number;
    constructor(
        owner: Person,
        saldo: number,
        comments?: Comments
    ){
        super(owner, saldo, comments);
        if(this.owner.age>YoungGiro.ageLimit){
            throw new Error("Peron not elegible")
        }

    }
}

class Person{
    constructor(public name: string, public age: number){}
}