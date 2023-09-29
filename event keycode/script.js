const content = document.querySelector('.content');
const keyContainer = document.querySelector('.key-container');
const keyEl = document.getElementById('key');
const keyCodeEl = document.getElementById('key-code');
const codeEl = document.getElementById('code');

checkKey = (e) => {
    content.style.display = 'none';
    keyContainer.style.display = 'flex';

    keyEl.innerText = e.key !== ' ' ? e.key : e.code;
    keyCodeEl.innerText = e.keyCode;
    codeEl.innerText = e.code;
};

document.addEventListener('keydown', checkKey);
