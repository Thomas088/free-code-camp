const Person = function(firstAndLast) {
  
let splited = firstAndLast.split(" ");
let firstName;
let lastName;

  this.getFirstName = () => splited[0]

  this.getLastName = () => splited[1]

  this.getFullName = () => splited.join(" ")

  this.setFirstName = first => {
    splited[0] = first
    return first
  }

  this.setLastName = last => {
    splited[1] = last
    return last
  }


  this.setFullName = firstAndLast => {
    splited = firstAndLast.split(" ")  
    firstName = splited[0];
    lastName = splited[1];
    return `${firstName} ${lastName}`
  };
};

let bob = new Person('Bob Ross');

