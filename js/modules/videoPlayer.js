const video = document.getElementById('myVideo');
let btn = document.querySelector('.header__play');
btn.addEventListener('click', Play);

function Play(e) {
  if (video.paused) {
    e.target.src = '../../assets/pause-icon.svg';
    video.play();
  } else {
    e.target.src = '../../assets/play-icon.svg';
    video.pause();
  }
}

const videoPlayer = {
  init: () => {
    btn.addEventListener('click', Play);
  },
};

export default videoPlayer;
