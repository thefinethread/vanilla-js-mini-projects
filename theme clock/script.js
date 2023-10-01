const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalClock = document.querySelector('.digital-clock');
const dateEl = document.querySelector('.date');
const themeBtn = document.querySelector('.theme-icon');

restoreThemeFromLS = () => {
    if (localStorage.getItem('clock-theme')) {
        if (localStorage.getItem('clock-theme') === 'dark') {
            document.documentElement.classList.add('dark');
            themeBtn.firstElementChild.className = 'ri-sun-line';
        }
    }
};

changeTheme = () => {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        themeBtn.firstElementChild.className = 'ri-sun-line';
        localStorage.setItem('clock-theme', 'dark');
    } else {
        themeBtn.firstElementChild.className = 'ri-moon-line';
        localStorage.setItem('clock-theme', 'light');
    }
};

setDigitalClockTime = () => {
    const time = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });
    digitalClock.innerText = time;
};

setDate = () => {
    const date = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
    });
    dateEl.innerHTML = `
        <span>${date.split(' ')[0]} ${date.split(' ')[1]}</span>
        <span class="flex">${date.split(' ')[2]}</span>`;
};

showHours = () => {
    const hours = new Date().toLocaleTimeString().split(':')[0];
    const degreeToRotate =
        ((+hours +
            new Date().getMinutes() / 60 +
            new Date().getSeconds() / (60 * 60)) *
            360) /
        12;
    hourHand.style.transform = `rotateZ(${degreeToRotate}deg)`;
};

showMinutes = () => {
    const degreeToRotate =
        ((new Date().getMinutes() + new Date().getSeconds() / 60) * 360) / 60;
    minuteHand.style.transform = `rotateZ(${degreeToRotate}deg)`;
};

showSeconds = () => {
    const degreeToRotate = (new Date().getSeconds() * 360) / 60;
    secondHand.style.transform = `rotateZ(${degreeToRotate}deg)`;

    //  setDigitalClockTime
    setDigitalClockTime();

    // setDate
    setDate();
};

setIntervalForNeedles = () => {
    setInterval(showSeconds, 1000);
    setInterval(showMinutes, 1000);
    setInterval(showHours, 1000);
};

setStartingNeedlesPosition = () => {
    showSeconds();
    showMinutes();
    showHours();
};

setStartingNeedlesPosition();
setIntervalForNeedles();
restoreThemeFromLS();

themeBtn.addEventListener('click', changeTheme);
