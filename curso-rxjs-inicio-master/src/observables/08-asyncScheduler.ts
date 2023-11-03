import { asyncScheduler } from 'rxjs';

//setTimeout(()=>{},3000);
//setInterval(()=>{},3000);

const welcome = () => console.log('hello world');
const welcome2 = (name) => console.log(`hello ${name}`);

//asyncScheduler.schedule(welcome, 2000);
//asyncScheduler.schedule(welcome2, 2000, 'Richard');

const subs$ = asyncScheduler.schedule(
  function (state) {
    console.log('State', state);

    this.schedule(state + 1, 1000);
  },
  3000,
  0
);

// setTimeout(() => {
//   subs$.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs$.unsubscribe(), 6000);
