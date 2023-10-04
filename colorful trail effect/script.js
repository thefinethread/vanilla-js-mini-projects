const container = document.querySelector('.container');

let numberOfBoxes = 500;

for (let i = 0; i < 500; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    container.appendChild(box);
}

const generateRandomColor = () => {
    const randomHexString = [...Array(6)]
        .map(() => Math.floor(Math.random() * 16).toString(16))
        .join('');

    return `#${randomHexString}`;
};

const createTrailEffect = (e) => {
    const color = generateRandomColor();
    e.target.style.backgroundColor = color;
    e.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeTrailEffect = (e) => {
    e.target.style.backgroundColor = '#222';
    e.target.style.boxShadow = `0 0 2px #111`;
};

document.querySelectorAll('.box').forEach((box) => {
    box.addEventListener('mouseover', createTrailEffect);
    box.addEventListener('mouseout', removeTrailEffect);
});
