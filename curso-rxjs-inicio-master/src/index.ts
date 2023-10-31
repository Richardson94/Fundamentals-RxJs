import { Observable, Observer} from 'rxjs';

const observer:Observer<any> = {
  next: value=> console.log('[Next]-> ', value),
  error: error => console.warn('[Error]-> ',error),
  complete: ()=> console.info('[Completed]')
}

//const obs$ = Observable.create();
const obs$ = new Observable<string>(subs => {
subs.next('hola');
subs.next('mundo');
subs.next('hola');
subs.next('mundo');

// Forcing an Error
const a = undefined;
//a.name = 'Richard';

//subs.next(a);

subs.complete();
});

// obs$.subscribe(
//   value => console.log('next: ', value),
//   error=> console.warn('error: ', error),
//   ()=>console.info('Complete')
// );

obs$.subscribe(observer);