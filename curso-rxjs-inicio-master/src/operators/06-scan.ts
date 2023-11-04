import { from } from 'rxjs';
import { map, reduce, scan } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5];

// const totalAccumulated = (acc, curr) => {
//   return acc + curr;
// };

const totalAccumulated = (acc, curr) => acc + curr;

//Reduce
from(numbers)
  .pipe(reduce(totalAccumulated, 0))
  .subscribe((value) => console.log('Reduce:', value));

//Scan
from(numbers)
  .pipe(scan(totalAccumulated, 0))
  .subscribe((value) => console.log('Scan:', value));

//Redux
interface User {
  id?: string;
  autenticated?: boolean;
  token?: string;
  age?: number;
}
const user: User[] = [
  { id: 'nrcs', autenticated: false, token: null },
  { id: 'nrcs', autenticated: true, token: 'ABC' },
  { id: 'nrcs', autenticated: true, token: 'ABC123' },
];

const state$ = from(user).pipe(
  scan<User>((acc, cur) => {
    return { ...acc, ...cur };
  })
);

const id$ = state$.pipe(map((state) => state.id));

id$.subscribe(console.log);
