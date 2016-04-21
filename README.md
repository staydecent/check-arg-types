# check-arg-types

[![Build Status](https://travis-ci.org/staydecent/check-arg-types.svg?branch=master)](https://travis-ci.org/staydecent/check-arg-types) [![bitHound Score](https://www.bithound.io/github/staydecent/check-arg-types/badges/score.svg)](https://www.bithound.io/github/staydecent/check-arg-types)

Pass in `arguments` and an array of the expected types (as string descriptions) and throw if they don't match.

```javascript
function test(a, b, c) {
  checkArgTypes(arguments, ['string', 'number', 'boolean']);
  return a + b + c;
}

test('hey', 1, 'true'); // Uncaught TypeError: Expected 'boolean' given 'string' for argument at index 2
```

### Allow multiple types

```javascript
/* a can be a string or a number */
function example(a, b) {
  checkArgTypes(arguments, [['string', 'number'], 'number']);
  return a + b;
}
```

### Can skip checking for some arguments

```javascript
/* b can be any type */
function example(a, b, c) {
  checkArgTypes(arguments, ['string', '-any', 'numbers');
  return a + b + c;
}
```