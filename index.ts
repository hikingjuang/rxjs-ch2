// import './style.css';

// import { of, map, Observable } from 'rxjs';

// of('World')
//   .pipe(map((name) => `Hello, ${name}!`))
//   .subscribe(console.log);
const data = ['a', 'b', 'c', 'd'];
//using  iteration protocol
const createEvenOddIterator = (data) => {
  let nextIndex = 0;
  return {
    [Symbol.iterator]: () => {
      return {
        next: () => {
          const currentIndex = nextIndex;
          nextIndex += 2;
          if (nextIndex >= data.length && nextIndex % 2 == 0) {
            nextIndex = 1;
          }
          if (currentIndex < data.length) {
            return {
              value: data[currentIndex],
              done: false,
            };
          } else {
            return { done: true };
          }
        },
      };
    },
  };
};
for (let i of createEvenOddIterator(data)) {
  console.log(i);
}
// using generator
// const createEvenOddIterator = function* (data: any[]) {
//   let nextIndex = 0;
//   do {
//     const currentIndex = nextIndex;
//     nextIndex += 2;
//     if (nextIndex >= data.length && nextIndex % 2 == 0) {
//       nextIndex = 1;
//     }
//     yield data[currentIndex];
//   } while (nextIndex < data.length);
// };

// for (let d of createEvenOddIterator(data)) {
//   console.log(d);
// }
