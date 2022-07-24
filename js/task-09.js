
const refs = {
  body : document.body,
  buttonEl : document.querySelector('.change-color'),
  spanEl : document.querySelector('.color')
}


refs.buttonEl.addEventListener('click' , changeBackgroundColor)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBackgroundColor () {
  refs.body.style.backgroundColor = getRandomHexColor(),
  refs.spanEl.textContent = refs.body.style.backgroundColor
}