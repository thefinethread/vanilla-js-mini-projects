const inputEl = document.querySelector('#input');

inputEl.style.background = `linear-gradient(to right, orangered ${inputEl.value}%, #fff ${inputEl.value}%)`;

const calculateProgress = (input) => {
    const minVal = input.getAttribute('min');
    const maxVal = input.getAttribute('max');
    const progress = (100 / (maxVal - minVal)) * input.value;
    return progress;
};

const onChange = (e) => {
    const progress = calculateProgress(e.target);
    inputEl.style.background = `linear-gradient(to right, orangered ${progress}%, #fff ${progress}%)`;
};

inputEl.addEventListener('input', onChange);
window.addEventListener(
    'DOMContentLoaded',
    () =>
        (inputEl.style.background = `linear-gradient(to right, orangered ${inputEl.value}%, #fff ${inputEl.value}%)`)
);
