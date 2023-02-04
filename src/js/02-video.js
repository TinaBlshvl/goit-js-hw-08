import throttle from "lodash.throttle";
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localStorageKey = "videoplayer-current-time";

player.on('timeupdate', throttle(onVideoPlay, 1000));

function onVideoPlay(event) {
    localStorage.setItem(localStorageKey, event.seconds);
    if (event.percent === 1) {
        localStorage.removeItem(localStorageKey);
    }
}

setCurrentTime();

function setCurrentTime() {
    const getTime = localStorage.getItem(localStorageKey);
    if (getTime) {
        player.setCurrentTime(getTime);
    }
}





