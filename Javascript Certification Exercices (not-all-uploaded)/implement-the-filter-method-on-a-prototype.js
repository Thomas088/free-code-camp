// the global Array
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
const newArray = [];

for (let i = 0, n = this.length; i <= n; i++) {
  if(callback(this[i])) {
    newArray.push(this[i])
  }
}
  return newArray;
};

const new_s = s.myFilter(function(item){
  return item % 2 === 1;
});

console.log(new_s);