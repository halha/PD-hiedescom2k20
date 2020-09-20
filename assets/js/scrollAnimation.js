$(document).ready(() => {
  // scroll function
  $('.onScroll').each(function () {
    $(window).scroll((e) => {
      let scroll = $(window).scrollTop() + $(window).height();
      const breakSec = $(this).offset().top;
      if (scroll > breakSec) {
        $(this).removeClass('hidden');
        $(this).addClass('play');
        // Repeat
        // } else if (scroll > breakSec - 2000) {
        //   $(this).addClass("hidden");
        //   $(this).removeClass("play");
      }
    });
  });
});

$('.play.count').each(function () {
  $(this)
    .prop('Counter', 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 1500,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});
