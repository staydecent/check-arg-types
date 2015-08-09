var checkArgTypes = require('../');
var test = require('tape');

var toType = checkArgTypes.prototype.toType;


test('toType should handle "boolean" value', function(t) {
  t.equal('boolean', toType(true));
  t.end();
});

test('toType should handle "number" value', function(t) {
  t.equal('number', toType(1));
  t.end();
});

test('toType should handle "string" value', function(t) {
  t.equal('string', toType('a'));
  t.end();
});

test('toType should handle "object" value', function(t) {
  t.equal('object', toType({a:1}));
  t.end();
});

test('toType should handle "array" value', function(t) {
  t.equal('array', toType([1,2,3]));
  t.end();
});

test('toType should handle "arguments" value', function(t) {
  t.equal('arguments', toType(arguments));
  t.end();
});

test('toType should handle "error" value', function(t) {
  t.equal('error', toType(new ReferenceError));
  t.end();
});

test('toType should handle "date" value', function(t) {
  t.equal('date', toType(new Date));
  t.end();
});

test('toType should handle "regexp" value', function(t) {
  t.equal('regexp', toType(/.*/));
  t.end();
});

test('toType should handle "math" value', function(t) {
  t.equal('math', toType(Math));
  t.end();
});

test('toType should handle "json" value', function(t) {
  t.equal('json', toType(JSON));
  t.end();
});

