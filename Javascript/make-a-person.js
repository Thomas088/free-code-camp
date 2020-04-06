var Person = function(firstAndLast) {
  
let splited = firstAndLast.split(" ");
let firstName;
let lastName;

  this.getFirstName = function () {
    return splited[0];
  }

  this.getLastName = function () {
    return splited[1];
  }

  this.getFullName = function () {
    return splited.join(" ");
  }

  this.setFirstName = function (first) {
    splited[0] = first
    return first
  }

  this.setLastName = function (last) {
    splited[1] = last
    return last
  }


  this.setFullName = function(firstAndLast) {
    splited = firstAndLast.split(" ")  
    firstName = splited[0];
    lastName = splited[1];
    return `${firstName} ${lastName}`
  };
};

let bob = new Person('Bob Ross');

