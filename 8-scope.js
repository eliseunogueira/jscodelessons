let myName = 'Eliseu';
function amazingFunction() {
  let myName = 'Eliseu Junior';
  if (2 + 2 == 4) {
    let myName = 'Eliseu the 3rd';
    console.log('inside the if statement', myName);
  }
  console.log('inside our function', myName);
}
amazingFunction();
console.log('in the global scope', myName);
