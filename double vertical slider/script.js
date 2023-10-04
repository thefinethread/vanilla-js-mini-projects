const container = document.querySelector('.container');
const downBtn = document.querySelector('.btn-down');
const upBtn = document.querySelector('.btn-up');
const columnLeft = document.querySelector('.column-1');
const columnRight = document.querySelector('.column-2');
const slidesLength = columnRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

// so that the children of left column go above the VH and can come below when we press down btn
columnLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

const changeSlide = (direction) => {
    // making slide height dynamic to fit window size
    const slideHeight = container.clientHeight;

    if (direction === 'up') {
        activeSlideIndex++;
        activeSlideIndex > slidesLength - 1 && (activeSlideIndex = 0);
    } else {
        activeSlideIndex--;
        activeSlideIndex < 0 && (activeSlideIndex = slidesLength - 1);
    }

    columnRight.style.transform = `translateY(-${
        activeSlideIndex * slideHeight
    }px)`;

    columnLeft.style.transform = `translateY(${
        activeSlideIndex * slideHeight
    }px)`;
};

downBtn.addEventListener('click', () => changeSlide('down'));
upBtn.addEventListener('click', () => changeSlide('up'));
