import anime from 'animejs/lib/anime.es';

anime({
    targets: '.line-drawing-demo .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function (el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
}); 



/* document.querySelector('.line-drawing-demo .play').click = Animation.play;
document.querySelector('.line-drawing-demo .pause').click = Animation.pause; */
