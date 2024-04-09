(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const dollimgs = document.querySelector('#dollimgs');
    const sections = document.querySelectorAll('section');
    const slider = document.querySelector('#slider');
    const slidingbutton = document.querySelector('#slidingbutton');
    const greydoll = document.querySelector('#greydoll');
    const pinkdoll = document.querySelector('#pinkdoll');
    const greystar = document.querySelector('#greystar');
    const pinkstar = document.querySelector('#pinkstar');
    const banner1 = document.querySelector('#banner1');
    const banner2 = document.querySelector('#banner2');
    const footer = document.querySelector('footer');



    let mode = 'dark';

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            body.className = 'switch';
            dollimgs.className = 'switch';
            button.className = 'switch';
            slider.className = 'switch';
            slidingbutton.className = 'switch';
            greydoll.className = 'switch';
            pinkdoll.className = 'switch';
            greystar.className = 'switch';
            pinkstar.className = 'switch';
            banner2.className = 'switch';
            banner1.className = 'switch';
            footer.className = 'switch';

            for (const section of sections) {
                section.className = 'switch';
            }

            mode = 'light';

        } else {
            body.removeAttribute('class');
            dollimgs.removeAttribute('class');
            button.removeAttribute('class');
            slider.removeAttribute('class');
            slidingbutton.removeAttribute('class');
            greydoll.removeAttribute('class');
            pinkdoll.removeAttribute('class');
            greystar.removeAttribute('class');
            pinkstar.removeAttribute('class');
            banner2.removeAttribute('class');
            banner1.removeAttribute('class');
            footer.removeAttribute('class');

            for (const section of sections) {
                section.removeAttribute('class');
            }

            mode = 'dark'
        }
    })
})()