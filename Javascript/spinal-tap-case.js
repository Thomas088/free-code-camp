function spinalCase(str) {
    
  let tabTemp = [];
  let splited = str.split(/(?=[_ -]|[A-Z][a-z]+)/g)
  let withDashes = splited.join("-")
                          .replace(/[ ]|[  ]/g, "")
                          .replace(/[--]+ |[-_-]+/g, "-")
  return withDashes.toLowerCase()

}

spinalCase("AllThe-small Things")
