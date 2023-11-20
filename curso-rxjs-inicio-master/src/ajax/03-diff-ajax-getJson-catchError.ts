import { of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

//const url = 'https://api.github.com/xxusers?per_page=5';
const url = 'http://httpbin.org/ssdelay/1';

const manageError = (resp: AjaxError) => {
  console.warn('error:', resp);
  return of({
    ok: false,
    users: [],
  });
};

// const obs$ = ajax.getJSON(url).pipe(catchError(manageError));
// const obs2$ = ajax(url).pipe(catchError(manageError));

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

// obs$.subscribe((data) => console.log('getJSON: ', data));
// obs2$.subscribe((data) => console.log('Ajax: ', data));

obs$.pipe(catchError(manageError)).subscribe({
  next: (val) => console.log('next: ', val),
  error: (err) => console.warn('error', err),
  complete: () => console.log('completed'),
});
