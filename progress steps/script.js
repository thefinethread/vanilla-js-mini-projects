const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const progressBar = document.querySelector('.progress-bar');
const steps = document.querySelectorAll('.progress-step');

const stepWidth = 100 / (steps.length - 1);

const currentStep = () => {
    let stepCount = 0;
    document
        .querySelectorAll('.progress-step')
        .forEach((step) => step.classList.contains('active') && stepCount++);
    return stepCount;
};

forwardStep = () => {
    const stepCount = currentStep();
    // add active class to the next step
    steps[stepCount].classList.add('active');
    // increase width of progress bar by 33%
    progressBar.style.width = `${stepCount * stepWidth}%`;

    stepCount === steps.length - 1 && (nextBtn.disabled = true);

    prevBtn.disabled = false;
};

backwardStep = () => {
    const stepCount = currentStep();

    steps[stepCount - 1].classList.remove('active');

    progressBar.style.width = `${
        100 - (steps.length - stepCount + 1) * stepWidth
    }%`;

    if (stepCount === 2) {
        prevBtn.disabled = true;
        nextBtn.disabled = false;
    }
};

nextBtn.addEventListener('click', forwardStep);
prevBtn.addEventListener('click', backwardStep);
