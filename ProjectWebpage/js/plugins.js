$(document).ready(function () {
  var bx = $('.bxslider').bxSlider({
    auto: true,
    mode: 'fade',
    randomStart: true,
    captions: true,
    speed: 4000,
    slideWidth: 600,
    infiniteLoop: true,
    autoControls: true,
    adaptiveHeight: true,
    adaptiveHeightSpeed: 3000,
    video: true
  });

  bx.fitVids();


  $('.vid').each(function(i) {
    var self = this;
    $(this).on('click', function() { //When user clicks on the video...
      (self.paused) ? self.play() : self.pause(); //play if paused, and pause video if currently playing
    });
    $(this).on('ended', function () {
      bx.goToNextSlide(); //Goes to next slide on video end
    });
  });

  $("#tabs").tabs();
});
