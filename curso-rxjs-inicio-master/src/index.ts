import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: (value) => console.log('the value is :', value),
  error: (error) => console.warn('error :', error),
  complete: () => console.info('completed!'),
};

//const obs$ = Observable.create();
const obs$ = new Observable<string>((subs) => {
  subs.next('Hola');
  subs.next('Mundo!');

  //forzando un error
  const a = undefined;
  a.nombre = 'fernando';

  subs.complete();
});

// obs$.subscribe((resp) => {
//   console.log(resp);
// });

obs$.subscribe(observer);
