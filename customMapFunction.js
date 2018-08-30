

var customMap = function(array, callBack) {
  array.forEach(function(element) {
    callBack(element);
  })
};

var double = function(number) {
  console.log(number * 2);
};

var yell = function(word) {
  var wordstring = word.toString();
  console.log(wordstring.toUpperCase() + "!!!!!!");
};


var numbers = [1, 2, 3, 4, 5, 6];
var words = ['cat', 'dog', 'walrus', 'parrot', 'kangaroo'];


customMap(numbers, double); // doubles the numbers
customMap(words, yell);  // yells some words
customMap(words, double);  // returns NaN, you can't double words!
customMap(numbers, yell); // LOUD NUMBERS