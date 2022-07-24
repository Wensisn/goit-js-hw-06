
const myInput = document.querySelector("#validation-input");
myInput.addEventListener("blur", onBlur);
function onBlur(e) {
  const inputFirst = e.currentTarget;
  const inputLength = +inputFirst.dataset.length;
  if (inputFirst.value.length === inputLength) {
    inputFirst.classList.remove("invalid");
    inputFirst.classList.add("valid");
  } else {
    inputFirst.classList.remove("valid");
    inputFirst.classList.add("invalid");
  }
}