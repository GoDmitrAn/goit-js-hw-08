import Player from '@vimeo/player';
let throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const setPlayerTime = localStorage.getItem("videoplayer-current-time") === ''
    ? 0
    : localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(setPlayerTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
        default:
            break;
    }
});
    

const onPlay =throttle(function(data) {
    
    localStorage.setItem("videoplayer-current-time",data.seconds)
    console.log(data.seconds);
},1000);
player.on('timeupdate', onPlay);

