import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    //takeWhile(({ y }) => y <= 150)
    //inclusive as default is false, but using true, show the last value
    takeWhile(({ y }) => y <= 150, true)
  )
  .subscribe({
    next: (val) => console.log('Next: ', val),
    complete: () => console.log('Completed'),
  });
