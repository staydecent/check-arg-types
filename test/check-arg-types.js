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

var funcAllowedMultipleTypes = function() {
  checkArgTypes(arguments, [['number', 'string'], 'string']);
};

test('checkArgTypes w/ multiple allowed types should pass', function(t) {
  t.plan(3);

  try {
    funcAllowedMultipleTypes(1, 'second');
    t.ok(true, 'number passed');

    funcAllowedMultipleTypes('1', 'second');
    t.ok(true, 'string passed');
  } catch (e) {
  }

  var didThrow = false;
  try {
    funcAllowedMultipleTypes({}, 'second');
  } catch (e) {
    didThrow = true;
  }
  t.equal(true, didThrow, 'thrown');

  t.end();
});


var funcAllowAnyType = function() {
  checkArgTypes(arguments, ['string', '-any', 'number']);
};

test('checkArgTypes can skip arguments checking', function(t) {
  t.plan(6);

  try {
    funcAllowAnyType('one', undefined, 4);
    t.ok(true, 'undefined for any');

    funcAllowAnyType('one', null, 4);
    t.ok(true, 'null for any');

    funcAllowAnyType('one', 'second', 4);
    t.ok(true, 'string for any');

    funcAllowAnyType('one', 1, 4);
    t.ok(true, 'number for any');

    funcAllowAnyType('one', {}, 4);
    t.ok(true, 'object for any');
  } catch (e) {
  }

  var didThrow = false;
  try {
    funcAllowAnyType(1, 'second', 1, 4);
  } catch (e) {
    didThrow = true;
  }
  t.equal(true, didThrow, 'thrown');

  t.end();
});
