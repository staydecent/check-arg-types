# check-arg-types

[![Build Status](https://travis-ci.org/staydecent/check-arg-types.svg?branch=master)](https://travis-ci.org/staydecent/check-arg-types)

Pass in `arguments` and an array of the expected types (as string descriptions) and throw if they don't match.

```javascript
function test(a, b, c) {
  checkArgTypes(arguments, ['string', 'number', 'boolean']);
  return a + b + c;
}

test('hey', 1, 'true'); // Uncaught TypeError: Expected 'boolean' given 'string' for argument at index 2
```
