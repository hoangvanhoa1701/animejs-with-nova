var squareToCircle = anime({
  targets: '.squareToCircle',
  translateX: 500,
  borderRadius: 50,
  duration: 2000,
  easing: 'linear',
  direction: 'alternate',
  endDelay: 1000,
  loop: true
});

function cssSelector() {
  anime({
    targets: '#cssSelector .el',
    left: '240px',
    backgroundColor: '#FFF',
    borderRadius: ['0%', '50%'],
    easing: 'easeInOutQuad',
  });
}

var roundLogEl = document.querySelector('.round');

function round() {
  anime({
    targets: roundLogEl,
    innerHTML: [0, 10000],
    easing: 'linear',
    round: 10 // Will round the animated value to 1 decimal
  });
}

anime({
  targets: '.specific-prop-params-demo .el',
  translateX: {
    value: 250,
    duration: 800
  },
  rotate: {
    value: 360,
    duration: 1800,
    easing: 'easeInOutSine'
  },
  scale: {
    value: 2,
    duration: 1600,
    delay: 800,
    easing: 'easeInOutQuart'
  },
  delay: 250 // All properties except 'scale' inherit 250ms delay
});

anime({
  targets: '.custom-square-demo .el',
  rotate: [360, -360],
  easing: 'linear',
  duration: 4000,
  loop: true
});

customSquareDemo();
function customSquareDemo() {
  anime({
    targets: '.square-mini',
    width: {
      value: function(el, i) {
        return i-0.001;
      },
      easing: 'easeInOutSine'
    },
    height: {
      value: function(el, i) {
        return i-0.001;
      },
      easing: 'easeInOutSine'
    },
    easing: 'linear',
    duration: 16000,
  });
}

var animation = anime({
  targets: '.segment',
  width: 20,
  duration: 300,
  easing: 'linear',
  delay: function (el, i, l) {
    return i * 500;
  },
  endDelay: 500,
  loop: true
});


//// custom-square-to-circle
anime({
  targets: '.custom-square-to-circle .el',
  rotate: [360, -360],
  easing: 'linear',
  duration: 6000,
  loop: true
});

anime({
  targets: '#square',
  rotate: [360, -360],
  easing: 'linear',
  duration: 2000,
  loop: true
});

var clickCustomSquareToCircle = anime({
  targets: '.custom-square-to-circle',
  translateX: 300,
  easing: 'linear',
  duration: 7000,
  direction: 'alternate',
  loop: true
});
document.querySelector('.custom-square-to-circle-play').onclick = clickCustomSquareToCircle.play;
document.querySelector('.custom-square-to-circle-pause').onclick = clickCustomSquareToCircle.pause;
document.querySelector('.custom-square-to-circle-restart').onclick = clickCustomSquareToCircle.restart;
