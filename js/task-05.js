const inputEl = document.querySelector('#name-input')
const spanEl = document.querySelector('#name-output')

const changeInput = (event) => {
    spanEl.textContent = !event.currentTarget ? 
     'Anonymous' : event.currentTarget.value
}

inputEl.addEventListener('input' , changeInput)