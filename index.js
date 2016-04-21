var toType = function(val) {
  var str = ({}).toString.call(val);
  return str.toLowerCase().slice(8, -1);
};

var checkArgTypes = function(args, types) {
  args = Array.prototype.slice.call(args);

  var givenType;
  var expectedType;

  for (var x = 0, len = args.length; x < len; ++x) {
    givenType = toType(args[x]);
    expectedType = types[x];
    if (expectedType === '-any') {
      continue;
    }

    if (toType(expectedType) === 'array') {
      var accepted = false;
      for (var p=0, l=expectedType.length; p<l; ++p) {
        accepted = accepted || (givenType === expectedType[p]);
      }
      if (!accepted) {
        throw new TypeError("Expected one of ["+expectedType.join(', ')+"] given '"+givenType+"' for argument at index "+x);
      }
    }
    else {
      if (givenType !== expectedType) {
        throw new TypeError("Expected '"+expectedType+"' given '"+givenType+"' for argument at index "+x);
      }
    }
  }
};

checkArgTypes.prototype.toType = toType;

module.exports = checkArgTypes;
