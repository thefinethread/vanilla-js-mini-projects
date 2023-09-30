const textArea = document.querySelector('textarea');
const choicesContainer = document.querySelector('.choices-container');

let choicesArr;

const pickRandomChoice = () => {
    // pick a random int between 0 and the length of (choicesArr - 1)
    const randomIndex = Math.floor(Math.random() * choicesArr.length);
    displayWinner(choicesArr[randomIndex]);
};

displayWinner = (choice) => {
    document.querySelectorAll('.choice').forEach((choiceEL) => {
        choiceEL.innerText === choice
            ? (choiceEL.style.backgroundColor = 'green')
            : (choiceEL.style.backgroundColor = '#f0932b');
    });
};

createShuffleEffect = () => {
    // generating random choice every 0.1s for 5s
    const intervalId = setInterval(pickRandomChoice, 100);
    setTimeout(() => clearInterval(intervalId), 5000);
};

const createChoicesTag = (e) => {
    if (e.key === 'Enter' && choicesContainer.innerHTML === '') {
        textArea.value = '';
        return;
    }

    if (e.key === 'Enter') {
        textArea.value = '';
        createShuffleEffect();
        return;
    }

    const value = e.target.value;

    choicesArr = value
        .split(',')
        .filter((choice) => choice.trim() !== '')
        .map((choice) => choice.trim());

    // to make choices not to repeat in every keypress event in DOM
    choicesContainer.innerHTML = '';

    choicesArr.forEach((choice) => {
        const choiceEl = document.createElement('div');
        choiceEl.className = 'choice';
        choiceEl.innerText = choice;
        choicesContainer.appendChild(choiceEl);
    });
};

textArea.addEventListener('keyup', createChoicesTag);
