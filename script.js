const data = [
    { title: "Solumate ", src: "music/song1.mp3.mp3" },
    { title: "ED-shrean-shape of you", src: "music/song2.mp3.mp3" },
    { title: "Alone", src: "music/alone.mp3.mp3" }
];

let currentsongindex = 0;
let isPlaying = false;

const playButton = document.getElementById('play');
const previousButton = document.getElementById('prev');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const recentsong = document.getElementById('current-song');
const audio = document.getElementById('audio-player');
const progress = document.getElementById('progress');

function song(noofsong) {
    audio.src = noofsong.src;
    recentsong.textContent = `Now playing: ${noofsong.title}`;
}

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
        audio.play();
        playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
    isPlaying = !isPlaying;
}

function updateProgress() {
    progress.value = (audio.currentTime / audio.duration) * 100;
}

function setProgress() {
    const newTime = (progress.value / 100) * audio.duration;
    audio.currentTime = newTime;
}

playButton.addEventListener('click', togglePlayPause);

nextButton.addEventListener('click', () => {
    currentsongindex = (currentsongindex + 1) % data.length;
    song(data[currentsongindex]);
    audio.play();
    isPlaying = true;
    playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
});

previousButton.addEventListener('click', () => {
    currentsongindex = (currentsongindex - 1 + data.length) % data.length;
    song(data[currentsongindex]);
    audio.play();
    isPlaying = true;
    playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
});

audio.addEventListener('timeupdate', updateProgress);
progress.addEventListener('input', setProgress);

song(data[currentsongindex]);