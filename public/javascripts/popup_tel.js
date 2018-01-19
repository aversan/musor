(function() {
  const $box = $('.js-phone-box-fixed');
  const $close = $box.find('.js-close');
  const timer_long = 15;

  $close.on('click', function(event) {
    event.preventDefault();
    $box.fadeOut(300);
    timerStart();
  });

  let count = 0;
  timer = function() {
    count = count + 1;
    if (count >= timer_long) {
      count = 0;
      clearInterval(counter);
      $box.fadeIn(300);
      return false;
    }
  };

  let counter = setInterval(timer, 1000);
  timerStart = function() {
    counter = setInterval(timer, 1000);
  };
}).call(this);
