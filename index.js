//////////// START Square To Circle
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
//////////// END Square To Circle

//////////// START CSS SELECTOR
function cssSelector() {
  anime({
    targets: '#cssSelector .el',
    left: '240px',
    backgroundColor: '#FFF',
    borderRadius: ['0%', '50%'],
    easing: 'easeInOutQuad',
  });
}
//////////// END CSS SELECTOR

//////////// START ROUND
var roundLogEl = document.querySelector('.round');
round();
function round() {
  anime({
    targets: roundLogEl,
    innerHTML: [0, 10000],
    easing: 'linear',
    round: 10 // Will round the animated value to 1 decimal
  });
}
//////////// END ROUND

//////////// START Xoay vòng vào trong
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
      easing: 'linear'
    },
    height: {
      value: function(el, i) {
        return i-0.001;
      },
      easing: 'linear'
    },
    easing: 'linear',
    duration: 16000,
  });
}
//////////// END Xoay vòng vào trong

//////////// START segment
var segment = anime({
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

var logEl = document.querySelector('#progress');
var battery = {
  charged: '0%',
}
var label = anime({
  targets: battery,
  charged: '100%',
  round: 1,
  easing: 'linear',
  duration: 30000,
  update: function() {
    logEl.innerHTML = battery.charged;
  },
  complete: function() {
    segment.pause();
    segment.seek(segment.duration);
  }  
});
//////////// END segment


//////////// START Hình vuông xoay quanh hình tròn
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
//////////// END Hình vuông xoay quanh hình tròn

//////////// START 
//////////// END 

//////////// START 
//////////// END 

//////////// START 
//////////// END 
