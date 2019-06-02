const test = require('ava');
const unique = require('../index');

test('must correctly filter unique values', (t) => {
  const arr = [1,2,3,4,1,3,5,8,9,9];

  const result = arr.filter(unique);

  const expected = [1, 2, 3, 4, 5, 8, 9];
  t.deepEqual(result, expected);
});
