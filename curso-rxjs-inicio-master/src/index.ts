import { from, of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

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
