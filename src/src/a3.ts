import { YoungGiro } from './younggiro';
import { GiroKonto, Konto } from './kontoBarrel';
import { Person } from './person';
import { Comments } from './comments'
import {Utils} from './utils'

let gkto: GiroKonto = new GiroKonto(new Person("Jens", 99), 100);
Utils.openKto(gkto);

let register: Array<Konto> = new Array();

register.push(gkto)

let p2: Person = new Person("Martin",12)

register.push(new YoungGiro(p2,12000));


