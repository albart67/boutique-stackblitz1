console.log("hello!");

let removeCartItemButtons = document.getElementsByClassName("btn-danger");
console.log(removeCartItemButtons);
console.log(removeCartItemButtons[0]);

for (let i = 0; i < removeCartItemButtons.length; i++) {
  let button = removeCartItemButtons[i];
  console.log(button);
  button.addEventListener("click", function(event) {
    console.log("clicked");
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
  });
}

console.log(removeCartItemButtons.length);
