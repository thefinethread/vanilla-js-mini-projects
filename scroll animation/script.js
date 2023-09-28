const boxes = document.querySelectorAll('.box');

const checkPointValue = (window.innerHeight * 4) / 5;

checkBoxes = () => {
    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        boxTop < checkPointValue
            ? box.classList.add('show')
            : box.classList.remove('show');
    });
};

checkBoxes();

window.addEventListener('scroll', checkBoxes);
