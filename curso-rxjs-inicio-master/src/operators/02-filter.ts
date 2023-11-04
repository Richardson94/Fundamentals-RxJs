import { from, fromEvent, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// range(1, 10)
//   .pipe(filter((val) => val % 2 === 1))
//   .subscribe(console.log);

range(20, 30).pipe(
  filter((val, i) => {
    console.log('index', i);
    return val % 2 === 1;
  })
);
//.subscribe(console.log);

interface Character {
  type: CharacterType;
  name: string;
}

enum CharacterType {
  Heroe,
  Villain,
}

const characters: Character[] = [
  {
    type: CharacterType.Heroe,
    name: 'Batman',
  },
  {
    type: CharacterType.Heroe,
    name: 'Robin',
  },
  {
    type: CharacterType.Villain,
    name: 'Joker',
  },
];

from(characters)
  .pipe(filter((character) => character.type !== CharacterType.Heroe))
  .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  map((event) => event.code),
  filter((keyCode) => keyCode === 'Enter')
);

keyup$.subscribe(console.log);
