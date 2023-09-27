const images = document.querySelectorAll('.img-container');

expandImage = (e) => {
    removeShowClass();
    e.target.classList.add('show');
};

removeShowClass = () => {
    images.forEach((img) => {
        img.classList.remove('show');
    });
};

images.forEach((img) => img.addEventListener('click', expandImage));
