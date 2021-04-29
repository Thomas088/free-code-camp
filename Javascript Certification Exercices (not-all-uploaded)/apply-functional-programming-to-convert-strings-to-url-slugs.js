// the global variable
const globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
return title.toLowerCase().split(" ").filter(val => val !== "").join("-")
}
// Add your code above this line

const winterComing = urlSlug(" Winter Is  Coming"); // Should be "winter-is-coming"

console.log(winterComing)