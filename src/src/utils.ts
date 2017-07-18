import { Konto } from './konto';

export class Utils{

    static openKto = function (kto: Konto) {
    console.log(`${kto.type} wird eröffnet für ${kto.owner.name}(${kto.owner.age})`);
    if (kto.comments) {
        for (let c in kto.comments) {
            console.log(c + " : "+kto.comments[c])
        }
    }
}

}