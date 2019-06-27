# youneek

A function to filter unique (you-neek) values

## Why?

You can read about it on [Medium](https://medium.com/@simontaylorau/filter-unique-in-javascript-226007247354)

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

## Try it out

Try it out with [runkit](https://runkit.com/nizmox/5d0bf825fda884001a41f6e7)

## Older browsers

This package uses `new Set`. If you are on an older browser you may need a polyfill.

* [Set support](https://kangax.github.io/compat-table/es6/#test-Set)
* [Polyfill with core-js](https://github.com/zloirock/core-js)
