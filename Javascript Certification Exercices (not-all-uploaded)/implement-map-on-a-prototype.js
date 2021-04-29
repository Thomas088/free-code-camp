// the global Array
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  const newArray = [];
  for (let i = 0, n = this.length; i < n; i++) {
    newArray.push(callback.apply(this, s));
    this.shift();
  }
  return newArray;
};

const new_s = s.myMap(function(item){
  return item * 2;
});

console.log(new_s)