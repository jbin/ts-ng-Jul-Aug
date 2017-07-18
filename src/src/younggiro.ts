import { Comments } from './comments';
import { Person } from './person';
import { GiroKonto } from './girokonto';

export class YoungGiro extends GiroKonto{
    static readonly ageLimit: number = 21;
    constructor(
        owner: Person,
        saldo: number,
        comments?: Comments
    ){
        super(owner, saldo, comments);
        if(this.owner.age>YoungGiro.ageLimit){
            throw new Error("Person not elegible")
        }

    }
}