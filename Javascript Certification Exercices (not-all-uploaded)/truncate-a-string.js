function truncateString(str, num) {

  let sliced = str.slice(0, num);

  if (num >= str.length) {
    return sliced += ""
  }

  return sliced += "..."

}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))
