var toType = function(val) {
  var str = ({}).toString.call(val);
  return str.toLowerCase().slice(8, -1);
};

var checkArgTypes = function(args, types) {
  args = Array.prototype.slice.call(args);
  
  var len = args.length;
  var x = 0;
  var givenType;
  var expectedType;

  while (x < len) {
    givenType = toType(args[x]);
    expectedType = types[x];
    
    if (givenType !== expectedType) {
      throw new TypeError("Expected '"+expectedType+"' given '"+givenType+"'");
    }

    x++;
  }
};

module.exports = checkArgTypes;
