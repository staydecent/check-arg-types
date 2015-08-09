var checkArgTypes = require('../');
var test = require('tape');

var func = function(a, b, c, d, e, f) {
  checkArgTypes(arguments, ['boolean', 'number', 'string', 'object', 'array']);
};

test('checkArgTypes should pass', function(t) {
  t.plan(1);
  func(true, 1, 'a', {a:1}, [1,2,3]);
  t.ok(true, 'passed');
});

test('checkArgTypes should throw', function(t) {
  var didThrow = false;
  t.plan(1);
  try {
    func(9, 1, 'a', {a:1}, [1,2,3]);
  } catch (e) {
    didThrow = true;
  }
  t.equal(true, didThrow, 'thrown');
});

