import { Observable, Observer, Subject} from 'rxjs';

const obs: Observer<any> = {
  next: value => console.log('Next :', value),
  error: error => console.warn('Error :', error),
  complete: ()=> console.info('Completed')
}

const interval$ = new Observable<number>( subs => {

  const intervalId = setInterval(()=>{
    subs.next(Math.random())
  },1000);

  return()=>{
    clearInterval(intervalId);
    console.log('Interval Destroyed')
  }
});

// const subs1 = interval$.subscribe(num => console.log('Subs1 - ',num));
// const subs2 = interval$.subscribe(num => console.log('Subs2 - ',num));

/**
 * Caracteristicas principales de un Subject
 * 1 - Casteo multiple
 * 2 - Tambien es un observer
 * 3 - Next, Error y Complete
 */
const subject$ = new Subject();
const subscription = interval$.subscribe(subject$);

const subs1 = subject$.subscribe(obs);
const subs2 = subject$.subscribe(obs);
//const subs3 = subject$.subscribe(num => console.log('Subs3 - ',num));

setTimeout(()=>{

  subject$.next(10);
  subject$.complete();
  subscription.unsubscribe();
  
},3500);