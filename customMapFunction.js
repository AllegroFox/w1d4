

var customMap = function(array, callBack) {
  array.forEach(function(element) {
    callBack(element);
  })
};

var double = function(number) {
  console.log(number * 2);
};

var yell = function(word) {
  console.log(word.toUpperCase() + "!!!!!!");
};


var testArray = [1, 2, 3, 4, 5, 6];
var words = ['cat', 'dog', 'walrus', 'parrot', 'kangaroo'];


customMap(testArray, double);
customMap(words, yell);
