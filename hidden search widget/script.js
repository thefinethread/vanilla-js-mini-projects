const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('active');
    document.querySelector('input').focus();
});
