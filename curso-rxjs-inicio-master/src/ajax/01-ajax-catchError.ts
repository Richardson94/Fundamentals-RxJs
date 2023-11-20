import { AjaxError, ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const url = 'https://api.github.com/usersX?per_page=5';

const manageError = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const atrapaError = (err: AjaxError) => {
  console.warn('error en:', err.message);
  return of([]);
};

const fetchPromise = fetch(url);

// fetchPromise
//   .then((resp) => resp.json())
//   .then((data) => console.log('data', data))
//   .catch((err) => console.warn('error en usuarios: ', err));

// fetchPromise
//   .then(manageError)
//   .then((resp) => resp.json())
//   .then((data) => console.log('data', data))
//   .catch((err) => console.warn('error en usuarios: ', err));

ajax(url)
  .pipe(
    map((resp) => resp.response),
    catchError(atrapaError)
  )
  .subscribe(console.log);
