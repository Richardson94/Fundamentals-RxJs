import { interval, timer } from 'rxjs';

const obs$ = {
  next: (val) => console.log('Next :', val),
  complete: () => console.log('Completed!'),
};

const todayOn5 = new Date();
todayOn5.setSeconds(todayOn5.getSeconds() + 5);

const interval$ = interval(1000);
//const timer$ = timer(2000);
//const timer$ = timer(2000, 1000);
//const timer$ = timer(0);
const timer$ = timer(todayOn5);

console.log('Begin');
//interval$.subscribe(obs$);
timer$.subscribe(obs$);
console.log('End');
