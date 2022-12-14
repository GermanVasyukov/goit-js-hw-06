const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const increment = () => {
    counterValue += 1;
    value.textContent = counterValue;
}

const decrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);