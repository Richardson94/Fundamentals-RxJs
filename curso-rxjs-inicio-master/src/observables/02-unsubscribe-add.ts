import { Observable, Observer} from 'rxjs';

const obs: Observer<any> = {
  next: value => console.log('Next :', value),
  error: error => console.warn('Error :', error),
  complete: ()=> console.info('Completed')
}

const interval$ = new Observable<number>( subs => {
  let count = 0;
  const intervalSetted = setInterval(()=>{
    count++;
    subs.next(count);
    // if(count>=10){
    //   subs.complete();
    // }
    //console.log(count);
  }, 1000);
  setTimeout(()=>{
    subs.complete();
  },2500)
  return()=>{
    clearInterval(intervalSetted);
    console.log('Interval Destroyed')
  };
});

const subs1 = interval$.subscribe(obs);
const subs2 = interval$.subscribe(obs);
const subs3 = interval$.subscribe(obs);

subs1.add( subs2
      .add(subs3));

setTimeout(() => {
   subs1.unsubscribe();
  // subs2.unsubscribe();
  // subs3.unsubscribe();


  console.log('Completed Timeout')
},3000);

//interval$.subscribe(obs);
