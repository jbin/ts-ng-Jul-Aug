"use strict";
const baseInterest = 2.5;
function calculateInterest(cap, procentPoints = baseInterest) {
    return cap * procentPoints / 100;
}
let capital = 1300;
let interestRate = 2;
let interest = calculateInterest(capital, interestRate);
console.log(`${interest}€ Zinsen aus ${capital}€ Kapital`);
console.log(calculateInterest(capital));
function cInterest(cap, percentPoints = baseInterest, years = 1) {
    let zinseszinsSatz = 1 + percentPoints / 100;
    let endCapital = cap * Math.pow(zinseszinsSatz, years);
    return endCapital - cap;
}
console.log(cInterest(100, 2, 4));
let openAccount = function (type, name, age, capital, ...comments) {
    console.log(`${type} wird eröffnet für ${name}(${age})
     mit einer Ersteinlage von ${capital}`);
    for (let c of comments) {
        console.log(c);
    }
};
openAccount("Giro", "Jens", 102, 100000, "hallo", "kommentar");
//# sourceMappingURL=test.js.map