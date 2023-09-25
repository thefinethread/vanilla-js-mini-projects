const playPauseBtn = document.querySelector('.play-pause-btn');
const stopBtn = document.querySelector('.stop-btn');
const video = document.querySelector('video');
const timestamp = document.querySelector('#timestamp');
const timeline = document.querySelector('#timeline');

secondsToMmSS = (sec) => {
    return new Date(sec * 1000).toISOString().substring(14, 19);
};

video.onloadedmetadata = () => {
    timestamp.innerText = `00:00 / ${secondsToMmSS(video.duration)}`;
};

playPauseVideo = () => {
    if (!video.paused) {
        video.pause();
        playPauseBtn.firstElementChild.className = 'ri-play-fill';
    } else {
        video.play();
        playPauseBtn.firstElementChild.className = 'ri-pause-fill';
    }
};

stopVideo = () => {
    video.pause();
    video.currentTime = 0;
    playPauseBtn.firstElementChild.className = 'ri-play-fill';
};

updateTimeInRangeInput = () => {
    timeline.value = (video.currentTime / video.duration) * 100;
};

seekVideo = () => {
    console.log(timeline.value);
    video.currentTime = (timeline.value * video.duration) / 100;
};

// event listeners
playPauseBtn.addEventListener('click', playPauseVideo);

video.addEventListener('timeupdate', () => {
    timestamp.innerText = `${secondsToMmSS(
        video.currentTime
    )} /  ${secondsToMmSS(video.duration)}`;

    updateTimeInRangeInput();
});

video.addEventListener('ended', () => {
    video.currentTime = 0;
    playPauseBtn.firstElementChild.className = 'ri-play-fill';
});

timeline.addEventListener('change', seekVideo);

stopBtn.addEventListener('click', stopVideo);
