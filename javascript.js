function randomH() {
  anime({
    targets: '.container .box',
    height: function() {
      return anime.random(100,300);
    },
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
    delay: anime.stagger(10, {from: 'center'}),
    duration: 200,
    complete: randomH
  });
}

randomH();

setInterval(randomH, 1875);
