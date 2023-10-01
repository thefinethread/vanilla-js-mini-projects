const fill = document.querySelector('.fill');
const boxes = document.querySelectorAll('.empty');

// drag events for fill
const dragStart = () => {
    fill.classList.add('drag');
    setTimeout(() => fill.classList.add('invisible'), 0);
};

const dragEnd = () => {
    fill.classList.remove('drag', 'invisible');
};

// drag events for boxes
const dragEnter = (e) => {
    e.preventDefault();
    e.target.classList.add('hovered');
};

const dragOver = (e) => {
    e.preventDefault();
};

const dragLeave = (e) => {
    e.preventDefault();
    e.target.classList.remove('hovered');
};

const dragDrop = (e) => {
    e.target.classList.remove('hovered');
    e.target.appendChild(fill);
};

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

boxes.forEach((box) => {
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', dragDrop);
});
