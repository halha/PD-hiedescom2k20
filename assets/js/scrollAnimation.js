$(document).ready(() => {
  // scroll function
  $('.onScroll').each(function () {
    $(window).scroll((e) => {
      let scroll = $(window).scrollTop() + $(window).height();
      const breakSec = $(this).offset().top;
      if (scroll > breakSec) {
        $(this).removeClass('hidden');
        $(this).addClass('play');
        count();
      }
    });
  });
});

function count() {
  $('.count').each(function () {
    $(this)
      .prop('Counter', 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
}
