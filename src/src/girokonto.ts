import { Konto } from './konto';
import { Comments } from './comments';
import { Person } from './person';

export class GiroKonto implements Konto{
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
        this.saldo -= betrag;
    }
}