// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  for (let i = 0, n = this.length; i < n; i++) {
    newArray.push(callback.apply(this, s));
    this.shift();
  }
  return newArray;
};

var new_s = s.myMap(function(item){
  return item * 2;
});

console.log(new_s)