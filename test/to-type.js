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

test('toType should handle "int8array" value', function(t) {
  t.equal('int8array', toType(new Int8Array()));
  t.end();
});

test('toType should handle "uint8array" value', function(t) {
  t.equal('uint8array', toType(new Uint8Array()));
  t.end();
});

test('toType should handle "uint8clampedarray" value', function(t) {
  t.equal('uint8clampedarray', toType(new Uint8ClampedArray()));
  t.end();
});

test('toType should handle "int16array" value', function(t) {
  t.equal('int16array', toType(new Int16Array()));
  t.end();
});

test('toType should handle "uint16array" value', function(t) {
  t.equal('uint16array', toType(new Uint16Array()));
  t.end();
});

test('toType should handle "int32array" value', function(t) {
  t.equal('int32array', toType(new Int32Array()));
  t.end();
});

test('toType should handle "uint32array" value', function(t) {
  t.equal('uint32array', toType(new Uint32Array()));
  t.end();
});

test('toType should handle "float32array" value', function(t) {
  t.equal('float32array', toType(new Float32Array()));
  t.end();
});

test('toType should handle "float64array" value', function(t) {
  t.equal('float64array', toType(new Float64Array()));
  t.end();
});