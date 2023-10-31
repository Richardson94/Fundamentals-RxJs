import { Observable} from 'rxjs';

//const obs$ = Observable.create();
const obs$ = new Observable(subs => {
subs.next('hola');
subs.next('mundo');
subs.next('hola');
subs.next('mundo');
subs.complete();
});

obs$.subscribe(resp => console.log(resp));