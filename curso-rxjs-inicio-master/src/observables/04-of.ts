import { of } from 'rxjs';

const obs$ = of(1, 2, 3, 4, 5, 6);
//const obs$ = of(...[1, 2, 3, 4, 5, 6]);
//const obs$ = of('data', 1, 'test', 2);
// const obs$ = of<any>(
//   [1, 2],
//   { a: 1, b: 2 },
//   function () {},
//   true,
//   Promise.resolve(true)
// );
//const obs$ = of<string>('data', 1, 'test', 2);

console.log('Begin d of Obs$');
obs$.subscribe(
  (next) => console.log('Next :', next),
  null,
  () => console.log('Secuence Completed')
);

console.log('End of Obs$');
