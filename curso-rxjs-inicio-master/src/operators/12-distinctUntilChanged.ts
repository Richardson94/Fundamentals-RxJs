import { from, of } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';

const numbers$ = of(1, '1', 1, 3, 3, 3, 2, 2, 3, 3, 4, 3, 1, '1');

//numbers$.pipe(distinctUntilChanged()).subscribe(console.log);

interface Character {
  name: string;
}

const character: Character[] = [
  { name: 'Megaman' },
  { name: 'Megaman' },
  { name: 'X' },
  { name: 'Zero' },
  { name: 'Dr. Willy' },
  { name: 'X' },
  { name: 'X' },
  { name: 'Megaman' },
  { name: 'Zero' },
];

from(character)
  .pipe(distinctUntilChanged((ant, act) => ant.name === act.name))
  .subscribe(console.log);
