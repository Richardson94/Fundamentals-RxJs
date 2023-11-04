import { of } from 'rxjs';
import { tap, take } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4, 5).pipe(tap((t) => console.log('tap:', t)));

numbers$.pipe(take(3)).subscribe({
  next: (val) => console.log(val),
  complete: () => console.log('Completed'),
});
