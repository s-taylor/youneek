function unique(elem, index, array) {
  for (var i = 0; i < index; i++) {
    if (array[i] === elem) return false;
  }
  return true;
};

module.exports = unique;
