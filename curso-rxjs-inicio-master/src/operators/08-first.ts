import { fromEvent } from 'rxjs';
import { first, map, take, tap } from 'rxjs/operators';

const clicks$ = fromEvent<MouseEvent>(document, 'click');

clicks$
  .pipe(
    //take(1)

    // map((val) => val.clientX),
    // first((value) => value > 100)

    //first<MouseEvent>((event) => event.clientY >= 150)

    tap<MouseEvent>(console.log),
    // map((event) => ({
    //   clientY: event.clientY,
    //   clientX: event.clientX,
    // }))
    map(({ clientX, clientY }) => ({ clientX, clientY })),
    first((event) => event.clientX >= 150)
  )
  .subscribe({
    next: (val) => console.log('Next: ', val),
    complete: () => console.log('Completed'),
  });
