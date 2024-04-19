(function() {
    'use strict';
    console.log('reading');

    const myVideo = document.querySelector('#myVideo');
    const loading = document.querySelector('.fa-star');
    const fs = document.querySelector('.fa-expand');
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const line4 = document.querySelector('#line4');


    const lyrics = {
        start: [0, 4, 9, 16],
        stop: [3, 8, 14, 19], 
        line: [line1, line2, line3, line4]
    };

    myVideo.addEventListener('playing', function(){
        loading.style.display = 'none';
    })

    const intervalID = setInterval(checkTime, 200);

    function checkTime() {
        for (let i = 0; i < lyrics.start.length; i++) {
            if (lyrics.start[i] < myVideo.currentTime && myVideo. currentTime < lyrics.stop[i]) {
                lyrics.line[i].className = 'showing'
            } else {
                lyrics.line[i].className = 'hidden'
            }
        }
    }

    fs.addEventListener('click', function(){
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    })

})()