import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

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

from(character).pipe(distinctUntilKeyChanged('name')).subscribe(console.log);
