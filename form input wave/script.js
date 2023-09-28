const inputs = document.querySelectorAll('input');

formWave = (e) => {
    let spans = e.target.previousElementSibling.children;

    Array.from(spans).forEach((span, index) => {
        span.style.transform = `translateY(-24px)`;
        span.style.transition = `transform  0.1s linear, color 0.1s linear`;
        span.style.transitionDelay = `${index * 50}ms`;
        span.style.color = 'rgb(47, 210, 243)';
    });
    e.target.style.borderBottomColor = `rgb(32, 154, 178)`;
};

collapseWave = (e) => {
    let spans = e.target.previousElementSibling.children;

    if (e.target.value === '') {
        Array.from(spans).forEach((span) => {
            span.style.transform = `translateY(0px)`;
            span.style.color = '#fff';
        });
        e.target.style.borderBottomColor = `#fff`;
    }
};

inputs.forEach((input) => input.addEventListener('focusin', formWave));
inputs.forEach((input) => input.addEventListener('focusout', collapseWave));
