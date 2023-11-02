import { asyncScheduler, of, range } from 'rxjs';

//const rangeObs$ = range(1, 50);
//const rangeObs$ = range(-5, 10);
//const rangeObs$ = range(10);
const rangeObs$ = range(1, 5, asyncScheduler);

const src$ = of(1, 2, 3, 4, 5);
const src2$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//src$.subscribe(console.log);
//src2$.subscribe(console.log);
console.log('Begin');
rangeObs$.subscribe(console.log);
console.log('End');
