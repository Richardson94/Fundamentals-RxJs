import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const text = document.createElement('div');
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt volutpat metus vitae mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque a sapien fringilla, convallis dolor eu, ullamcorper sapien. Vivamus ultricies lacinia augue, maximus consequat orci porttitor sit amet. Sed sollicitudin feugiat sapien, gravida ullamcorper felis faucibus at. Donec faucibus odio eget dui posuere ultrices. Vestibulum vehicula nunc ac tempor egestas. Cras lacinia odio at tincidunt interdum. Donec quis enim id urna fermentum mollis. Praesent fringilla tincidunt viverra. Nulla fringilla suscipit nisl, sed auctor elit tristique ac. Vivamus nibh mauris, accumsan pellentesque bibendum at, elementum eu lectus. Quisque libero est, vulputate ut ligula non, sollicitudin ultrices nisi. Aliquam in molestie massa, ac semper justo. Donec erat felis, malesuada id est vel, cursus euismod quam.
<br/><br/>
Aenean semper, ipsum ac facilisis tincidunt, massa purus aliquam dolor, eu egestas arcu magna laoreet neque. Aenean semper scelerisque lectus, at efficitur augue ultrices non. Aenean dapibus ornare erat, vitae imperdiet quam egestas in. Praesent ac tempus metus. Ut vel viverra odio. Sed at sem orci. Proin suscipit rutrum quam ut pulvinar. Vivamus malesuada lectus a ullamcorper lacinia. Mauris et dapibus ante. Suspendisse luctus interdum risus, et lobortis risus suscipit ac. Integer consequat euismod tempor. In imperdiet ultricies accumsan. Sed vitae lacinia mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus commodo, mauris non finibus rutrum, purus nisi blandit ex, et consequat sem est ut dui. Sed fringilla malesuada ex id bibendum.
<br/><br/>
Duis sit amet lectus augue. Nulla congue ex dapibus, convallis tellus vitae, pretium mi. Vestibulum orci lacus, faucibus et feugiat eget, pellentesque rhoncus felis. Fusce tempor ut enim a iaculis. Proin euismod interdum pulvinar. Integer porttitor velit in libero facilisis, quis efficitur ligula tincidunt. Sed lobortis blandit orci, sed sodales ante commodo quis. Nulla a enim in lorem pellentesque laoreet. Nunc facilisis augue mollis tempus posuere. Donec efficitur malesuada lorem quis pretium. Suspendisse felis nunc, suscipit at tellus eget, tristique tincidunt mi.
<br/><br/>
Nulla sed lorem enim. Quisque dapibus finibus odio, ut finibus purus hendrerit at. Vivamus vestibulum quam in rutrum porttitor. Proin quis semper neque, id auctor diam. Etiam convallis quam a ligula vehicula, sit amet dapibus diam congue. Cras vitae tortor in felis condimentum varius quis vitae lorem. Nulla sed odio erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas et dapibus urna, eget ullamcorper eros. Integer ultricies sit amet odio ac tempor. Cras elementum dui in porttitor efficitur. Vestibulum dolor sem, varius ut molestie ut, lobortis et neque. Mauris et est consequat, varius ipsum rutrum, luctus arcu. Aliquam varius ante in mattis dignissim. Donec tristique, est sit amet fermentum bibendum, tortor dolor hendrerit augue, non efficitur mi leo non sem. Vestibulum semper purus id maximus congue.
<br/><br/>
Aenean sed laoreet ipsum. Nulla vel massa vel quam posuere egestas. Sed vulputate magna metus, nec bibendum nibh gravida sit amet. Sed elementum, elit mattis malesuada porttitor, elit quam laoreet mauris, a maximus risus eros eget felis. Nunc nec nibh sed elit dignissim sagittis at tempus dolor. Cras ut rutrum libero. Morbi in elit vel est consequat sollicitudin non eget mi. Fusce a auctor enim. In vitae tempus libero, nec feugiat tellus.
`;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

//funcion que realize el calculo
const calculatePercentageScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
  //  console.log({ scrollTop, scrollHeight, clientHeight });
};

// Streams
const scroll$ = fromEvent(document, 'scroll');
//scroll$.subscribe(console.log);

//crear un procedimiento que regrese el porcentaje que debe tener el scrollBar
const progress$ = scroll$.pipe(
  map((event) => calculatePercentageScroll(event)),
  tap((x) => console.log(x.toFixed(0), '%'))
);

progress$.subscribe((percentage) => {
  progressBar.style.width = `${percentage}%`;
});
