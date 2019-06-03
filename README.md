# youneek

A function to filter unique (you-neek) values

## Why?

It always felt natural to me to use filter to find unique values in an array. Filter is meant to take an array, and remove unwanted results which is exactly what this does.

A neat alternative is with ES6 you can do this...

```js
const unique = arr => [...new Set(arr)];
```

However to me, this `arr.filter(unique)` is better than `unique(arr)`, especially if you're chaining to a `.map`.

## How to use it?

`npm install youneek`

```js
const unique = require('youneek');

const arr = [1,2,3,4,1,3,5,8,9,9];

const result = arr.filter(unique);

// result === [1, 2, 3, 4, 5, 8, 9];
```

Though to be honest, you could copy and paste this. It's really small and I won't begrudge you for doing that, but maybe give me a star?

### Copy Paste

```js
function unique(elem, index, array) {
  for (var i = 0; i < index; i++) {
    if (array[i] === elem) return false;
  }
  return true;
};
```
