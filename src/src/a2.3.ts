const baseInterest = 2.5;

function calculateInterest(cap: number, procentPoints: number = baseInterest) :number {
    return cap * procentPoints / 100;
}
let capital = 1300;
let interestRate = 2;
let interest: number = calculateInterest(capital, interestRate);
console.log(`${interest}€ Zinsen aus ${capital}€ Kapital`);

console.log(calculateInterest(capital));

function cInterest(cap: number, percentPoints: number = baseInterest, years = 1) {
    let zinseszinsSatz = 1 + percentPoints / 100;
    let endCapital = cap * zinseszinsSatz ** years;
    return endCapital - cap;
}

console.log(cInterest(100,2,4))

let openAccount = function(
    type: string, 
    name: string, 
    age: number, 
    capital: number, 
    ...comments:string[]){
    console.log(`${type} wird eröffnet für ${name}(${age})
     mit einer Ersteinlage von ${capital}`);
     for(let c of comments){
         console.log(c)
     }
}

openAccount("Giro", "Jens", 102, 100000, "hallo", "kommentar");

let openAccount1 = (
    type: string, 
    name: string, 
    age: number, 
    capital: number, 
    ...comments:string[])=>{
    console.log(`${type} wird eröffnet für ${name}(${age})
     mit einer Ersteinlage von ${capital}`);
     for(let c of comments){
         console.log(c)
     }
}

openAccount1("Giro", "Jens", 102, 100000, "hallo", "kommentar")