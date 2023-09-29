const accordians = document.querySelectorAll('.accordian');

accordians.forEach((accordian) => {
    accordian.addEventListener('click', () => {
        const question = accordian.querySelector('.question');
        const answer = accordian.querySelector('p');

        if (accordian.classList.contains('active')) {
            accordian.classList.remove('active');
            answer.style.maxHeight = null;
        } else {
            accordian.classList.add('active');
            answer.style.maxHeight = `${answer.scrollHeight}px`;
        }
    });
});
