function repeatStringNumTimes(str, num) {

  let toRepeat = ""

  if (num < 1) {
    return ""
  } else {
    for (let i = 0; i < num; i++) {
       toRepeat += str;
    }
  }
  return toRepeat
}

console.log(repeatStringNumTimes("abc", 3));
