const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

const onFontSizeChange = (event) => {
    refs.input = Number(event.target.value);
    refs.text.style.fontSize = `${refs.input}px`;
};

refs.input.addEventListener('input', onFontSizeChange);