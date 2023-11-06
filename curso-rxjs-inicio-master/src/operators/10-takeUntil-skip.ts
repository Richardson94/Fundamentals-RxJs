import { fromEvent, interval } from 'rxjs';
import { skip, takeUntil, tap } from 'rxjs/operators';

const button = document.createElement('button');
button.innerHTML = 'Stop Timer';

document.querySelector('body').append(button);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(button, 'click').pipe(
  tap(() => console.log('tap antes del skip')),
  skip(1),
  tap(() => console.log('tap despues del skip'))
);

counter$
  .pipe(
    //skip(3),
    takeUntil(clickBtn$)
  )
  .subscribe({
    next: (val) => console.log('Next:', val),
    complete: () => console.log('Completed'),
  });
