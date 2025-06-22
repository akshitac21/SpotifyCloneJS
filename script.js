console.log("Welcome to Spotify!");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    { songName: "Song 1", filePath: "1.mp3", coverPath: "cover.png" },
    { songName: "Song 2", filePath: "1.mp3", coverPath: "cover.png" },
    { songName: "Song 3", filePath: "1.mp3", coverPath: "cover.png" },
    { songName: "Song 4", filePath: "1.mp3", coverPath: "cover.png" },
    { songName: "Song 5", filePath: "1.mp3", coverPath: "cover.png" },
    { songName: "Song 6", filePath: "1.mp3", coverPath: "cover.png" },
    { songName: "Song 7", filePath: "1.mp3", coverPath: "cover.png" },
    { songName: "Song 8", filePath: "1.mp3", coverPath: "cover.png" }
];

// Handle Play/Pause Click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// Listen to audio time updates
audioElement.addEventListener('timeupdate', () => {
    let progress = audioElement.duration
        ? parseInt((audioElement.currentTime / audioElement.duration) * 100)
        : 0;

    myProgressBar.value = progress;

    myProgressBar.style.background = `linear-gradient(to right, white 0%, white ${progress}%, #444 ${progress}%, #444 100%)`;
});

// Seek functionality
myProgressBar.addEventListener('change', () => {
    if (!isNaN(audioElement.duration)) {
        audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
    }
});
