import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('error: ', error),
  complete: () => console.info('completed!'),
};

const intervalo$ = new Observable<number>((subs) => {
  let count = 0;

  setInterval(() => {
    count++;
    subs.next(count);
  }, 100);
});

const subs = intervalo$.subscribe((num) => console.log(' Num:', num));

setTimeout(() => {
  subs.unsubscribe();
}, 3000);
