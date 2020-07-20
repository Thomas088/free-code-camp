function destroyer(arr, ...arg) {
return arr.filter((elt) => !(arg.includes(elt)))
}