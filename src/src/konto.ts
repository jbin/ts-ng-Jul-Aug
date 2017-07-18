import { Comments } from './comments';
import { Person } from './person';

export interface Konto {
    readonly type: string;
    owner: Person;
    comments?: Comments;
}