function convertHTML(str) {

  let splited = str.split("")

  let replace = (character, array) => {

    switch(character) {
      case "&":
      splited.splice(array.indexOf(character), 1, "&amp;");
      break;

      case "<":
      splited.splice(array.indexOf(character), 1, "&lt;");
      break;

      case ">":
      splited.splice(array.indexOf(character), 1, "&gt;");
      break;

      case "\"":
      splited.splice(array.indexOf(character), 1, "&quot;");
      break;

    case "\'":
      splited.splice(array.indexOf(character), 1, "&apos;");
      break;

    default:
      break;
    }
  }

for (let i = 0; i < splited.length; i++) {
    replace(splited[i], splited)
}

  return splited.join("")
}

