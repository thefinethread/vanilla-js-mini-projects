const text = document.querySelector('.text');
const container = document.querySelector('.container');

let count = 0;

const blurring = () => {
    count++;

    count > 99 && clearInterval(intervalId);

    text.innerText = `${count}%`;
    text.style.opacity = `${100 - count}%`;
    container.style.filter = `blur(${10 - (count / 100) * 10}px)`;
};

const intervalId = setInterval(blurring, 30);
