# youneek

A function to filter unique (you-neek) values

## Why?

It always felt natural to me to use `.filter` to find unique values in an array. Filter is meant to take an array, and remove unwanted results which is exactly what you are doing when getting unique values from an array. You iterate through an array, and remove any duplicate values you find, and then return the result.

A neat trick with ES6 is you can get unique values using...

```js
const unique = arr => [...new Set(arr)];
```

However to me, `arr.filter(unique())` is better than `unique(arr)`, especially if you're chaining to a `.map`, `.reduce` or other `.filter`.

## How to use it?

`npm install youneek`

```js
const unique = require('youneek');

const arr = [1,2,3,4,1,3,5,8,9,9];

/* Make sure you call unique! See why below */
const result = arr.filter(unique());

// result === [1, 2, 3, 4, 5, 8, 9];
```

### Copy Paste

Though to be honest, you could copy and paste this. It's really small and I won't begrudge you for doing that, but maybe give me a star?

```js
const unique = () => {
    let cache;  
    return (elem, index, array) => {
        if (!cache) cache = new Set(array);
        return cache.delete(elem);
    };
};
```
## Older browsers

This package uses `new Set`. If you are on an older browser you may need a polyfill.

* [Set support](https://kangax.github.io/compat-table/es6/#test-Set)
* [Polyfill with core-js](https://github.com/zloirock/core-js)

## How it works

The original version of this package did not require use of `Set` and was usable via `.filter(unique)` rather than `filter(unique())` which was nicer. It looked like this...

```js
function unique(elem, index, array) {
  for (var i = 0; i < index; i++) {
    if (array[i] === elem) return false;
  }
  return true;
}
```

This works by looping through the array and it checks each element against all the elements prior to it, to see if the same value exists. If it finds the same value earlier in the array it will return `false` and filter it out.

The problem with this approach is you end up rechecking the same values over and over. It is smart enough to abort as soon as it sees a duplication but on larger arrays performance will suffer.

So I wanted to find a solution that is performant. The unfortunate problem with `.filter` is there isn't any way to see the result as you iterate, so there isn't any way to check if you already found the value earlier in the iteration. You can't just check the results you have generated so far to see if the current value exists in there.

The solution to this is to use a closure which on the first element will use the `[...new Set(arr)]` trick to find all the unique values and store in `cache`. Then as it iterates it simply checks each value against the `cache`. It does this using `.delete` which means the first time a value is found, it will return `true` (for a successful deletion) since every element exists once in the cache. On subsequent checks for the same value (i.e. duplicates) it will return `false` since that value has been deleted (the deletion fails).
