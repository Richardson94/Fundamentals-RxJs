import { of, from, async } from 'rxjs';

/**
 * of = toma argumentos y genera una secuencia de valores
 * from = array, object, promise, iterable, observable
 */

const obs$ = {
  next: (val) => console.log('Next : ', val),
  complete: () => console.log('Completed'),
};

const myGenerator = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const myIterable = myGenerator();

// for (let id of myIterable) {
//   console.log(id);
// }

from(myIterable).subscribe(obs$);

//const source$ = from([1, 2, 3, 4, 5]);
//const source$ = of(...[1, 2, 3, 4, 5]);

//const source$ = from('Fernando');
//const source$ = of('Fernando');

const source$ = from(fetch('https://api.github.com/users/klerith'));
//const source$ = of(fetch('https://api.github.com/users/klerith'));

// source$.subscribe(async (resp) => {
//   console.log(resp);
//   const dataResp = await resp.json();
//   console.log(dataResp);
// });
//source$.subscribe(obs$);
