"use strict";

var unique = function unique() {
  var cache;
  return function (elem, index, array) {
    /* Note: `new Set` may require @babel/polyfill */
    if (!cache) cache = new Set(array);
    return cache.delete(elem);
  };
};

module.exports = unique;