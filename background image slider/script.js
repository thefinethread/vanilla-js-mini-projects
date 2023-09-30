const slideEl = document.querySelector('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const images = ['autumn', 'flower', 'forest', 'mountain', 'space'];

let i = 0;

nextImage = () => {
    i++;
    i === images.length && (i = 0);
    changeImage(i);
};

prevImage = () => {
    i--;
    i === -1 && (i = images.length - 1);
    changeImage(i);
};

changeImage = (i) => {
    slideEl.style.backgroundImage = `url(images/${images[i]}.jpg)`;
    document.body.style.backgroundImage = `url(images/${images[i]}.jpg)`;
};

prevBtn.addEventListener('click', prevImage);

nextBtn.addEventListener('click', nextImage);
