
let  counterValue = 0;
const decrementEl = document.querySelector('.decrement')
const targetEl = document.querySelector('.tagret')
const incrementEl = document.querySelector('.increment')

const onClickDecrement = () => {
    counterValue -= 1;
    targetEl.textContent = counterValue;
    
}

const onClickIncrement = () => {
    counterValue += 1;
    targetEl.textContent = counterValue;

}
decrementEl.addEventListener('click' , onClickDecrement);
incrementEl.addEventListener('click' , onClickIncrement)



