function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
const refs ={
  body: document.querySelector('body'),
  span: document.querySelector('.color'),
  btn: document.querySelector('.change-color'),
}
const onChangeBackgroundColor = (event) => {
  const newColor = getRandomHexColor();
  refs.body.style.backgroundColor = newColor;
  refs.span.textContent = newColor;
}

refs.btn.addEventListener('click', onChangeBackgroundColor);