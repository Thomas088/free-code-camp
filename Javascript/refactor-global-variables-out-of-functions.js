// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before bookName

function add (arr, bookName) {
  return arr.concat(bookName);
}

function remove (arr, bookName) {
  var book_index = arr.indexOf(bookName);
  if (book_index >= 0) {
    let firstArray = arr.slice(0, book_index);
    let secondArray = arr.slice(book_index + 1, arr.length)
    return firstArray.concat(secondArray);
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(newerBookList);
