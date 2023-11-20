import { ajax } from 'rxjs/ajax';
import {} from 'rxjs/operators';

//const url = 'https://api.github.com/users?per_page=5';
const url = 'http://httpbin.org/delay/1';

const obs$ = ajax.getJSON(url, {
  'Content-Type': 'application/json',
  'my-token': 'ABC123',
});

obs$.subscribe((data) => console.log('data: ', data));
