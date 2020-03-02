function confirmEnding(str, target) {

  if (str.slice(str.length - target.length) === target) {
    return true
  } else {
    return false
  }

}

console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
