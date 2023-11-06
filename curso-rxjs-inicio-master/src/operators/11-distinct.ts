import { from, of } from 'rxjs';
import { distinct } from 'rxjs/operators';

const numbers$ = of(1, 1, 1, 3, 3, 3, 2, 2, 3, 3, 4, 3, 1);

//numbers$.pipe(distinct()).subscribe(console.log);

interface Character {
  name: string;
}

const character: Character[] = [
  { name: 'Megaman' },
  { name: 'X' },
  { name: 'Zero' },
  { name: 'Dr. Willy' },
  { name: 'X' },
  { name: 'Megaman' },
  { name: 'Zero' },
];

from(character)
  .pipe(distinct((p) => p.name))
  .subscribe(console.log);
