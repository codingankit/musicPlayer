/* JavaScript Document */

const musicName = document.getElementById("musicName");
const loaderDiv = document.getElementById("loaderDiv");
const musicDurationTxt = document.getElementById("songDuration");
const currentMusicTimeTxt = document.getElementById("currentSongTime");
const musicProgress = document.getElementById("progressRange");
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

let currentMusicIndex = 0;

const musics = [
  {
    musicName: "Kal Ho Na Ho",
    source: "./musics/kalHoNaHo.mp3",
  },
  {
    musicName: "Kuch Kuch Hota Hai",
    source: "./musics/kuchKuchHotaHai.mp3",
  },
];


function playMusic() {
  const musicNameToPlay = musics[currentMusicIndex].musicName;
  const musicSource = musics[currentMusicIndex].source;
  let music = new Audio(musicSource);

  musicName.innerText = musicNameToPlay;
  musicProgress.disabled = true;
  pauseBtn.style.display = "none";
  playBtn.style.display = "inline";
  musicProgress.value = 0;
  currentMusicTimeTxt.innerText = `00.00`;
  musicDurationTxt.innerText = `00.00`;

  playBtn.addEventListener("click", () => {
    music.play();
    musicProgress.disabled = false;
    const musicDuration = evalMusicDuration(music);
    musicDurationTxt.innerText = musicDuration;
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";
  });

  music.addEventListener("timeupdate", () => {
    const progressTime = (music.currentTime / music.duration) * 100;
    const currentMusicTime = evalCurrentMusicTime(music);
    musicProgress.value = progressTime;
    currentMusicTimeTxt.innerText = currentMusicTime;
  });

  musicProgress.addEventListener("input", () => {
    const seekTime = (musicProgress.value / 100) * music.duration;
    music.currentTime = seekTime;
  });

  pauseBtn.addEventListener("click", () => {
    music.pause();
    pauseBtn.style.display = "none";
    playBtn.style.display = "inline";
  });

  nextBtn.addEventListener("click", () => {
    music.pause();
    if (musics.length == currentMusicIndex + 1) {
      currentMusicIndex = 0;
      music = 0;
      playMusic();
    } else {
      currentMusicIndex++;
      music = 0;
      playMusic();
    }
  });

  previousBtn.addEventListener("click", () => {
    music.pause();
    if (currentMusicIndex == 0) {
      currentMusicIndex = musics.length - 1;
      music = 0;
      playMusic();
    } else {
      currentMusicIndex--;
      music = 0;
      playMusic();
    }
  });

  music.addEventListener("ended", () => {
    if (musics.length == currentMusicIndex + 1) {
      currentMusicIndex = 0;
      music = 0;
      playMusic();
    } else {
      currentMusicIndex++;
      music = 0;
      playMusic();
    }
  });
}

function evalMusicDuration(music) {
  const minutes = Math.floor(music.duration / 60);
  const seconds = Math.floor(music.duration % 60);
  if (minutes.toString().length < 2 && seconds.toString().length < 2)
    return `0${minutes}.0${seconds}`;
  if (minutes.toString().length == 2 && seconds.toString().length < 2)
    return `${minutes}.0${seconds}`;
  if (minutes.toString().length < 2 && seconds.toString().length == 2)
    return `0${minutes}.${seconds}`;
  return `${minutes}.${seconds}`;
}

function evalCurrentMusicTime(music) {
  const minutes = Math.floor(music.currentTime / 60);
  const seconds = Math.floor(music.currentTime % 60);
  if (minutes.toString().length < 2 && seconds.toString().length < 2)
    return `0${minutes}.0${seconds}`;
  if (minutes.toString().length == 2 && seconds.toString().length < 2)
    return `${minutes}.0${seconds}`;
  if (minutes.toString().length < 2 && seconds.toString().length == 2)
    return `0${minutes}.${seconds}`;
  return `${minutes}.${seconds}`;
}

playMusic();
