const btn = document.getElementById('btn');
const circle = document.querySelector('.circle');

showRipple = (e) => {
    if (e.target === btn) {
        const circle = document.createElement('span');
        circle.className = 'circle';
        circle.style.top = e.offsetY + 'px';
        circle.style.left = e.offsetX + 'px';
        btn.appendChild(circle);
    }
};

btn.addEventListener('click', showRipple);
