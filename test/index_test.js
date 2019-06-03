const test = require('ava');
const unique = require('../index');

test('must correctly filter unique numbers', (t) => {
  const arr = [1,2,3,4,1,3,5,8,9,9];

  const result = arr.filter(unique);

  const expected = [1, 2, 3, 4, 5, 8, 9];
  t.deepEqual(result, expected);
});

test('must correctly filter unique strings', (t) => {
  const arr = ['Mark', 'Steve', 'Bernie', 'Mark', 'Harry', 'Joe', 'Harry', 'Mark'];

  const result = arr.filter(unique);

  const expected = ['Mark', 'Steve', 'Bernie', 'Harry', 'Joe'];
  t.deepEqual(result, expected);
});

test('must not mess with types that cannot be compared', (t) => {
  const arr = [{}, [1,2,3], { awesome: true }, []];

  const result = arr.filter(unique);

  t.deepEqual(result, arr);
});
