import { range } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const numbers$ = range(1, 5);

numbers$
  .pipe(
    tap((x) => {
      console.log('before', x);
      return 100;
    }),
    map((val) => (val * 10).toString()),
    tap({
      next: (value) => console.log('Next :', value),
      complete: () => console.log('Completed'),
    })
  )
  .subscribe((val) => console.log('subs', val));
