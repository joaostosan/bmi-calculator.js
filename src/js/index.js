import htmlElements from "./elements.js";
import showBmi from "./showBmi.js";

htmlElements.form.addEventListener('submit', async (ev) => {
    ev.preventDefault()
    try {
        const result = await showBmi(Number(htmlElements.weight.value), Number(htmlElements.height.value));
        htmlElements.result.textContent = result;
    } catch (err) {
        htmlElements[err.input].classList.add('error')
        document.querySelector(`#${err.input}-error`).textContent = err.message
    }
})

document.querySelector('#resetBtn').addEventListener('click', () => {
    htmlElements.form.reset();
    htmlElements.result.textContent = '';
});