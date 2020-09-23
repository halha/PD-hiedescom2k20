$(document).ready(() => {
  // scroll function
  $('.onScroll').each(function () {
    $(window).scroll((e) => {
      let scroll = $(window).scrollTop() + $(window).height();
      const breakSec = $(this).offset().top;

      if (scroll > breakSec) {
        $(this).removeClass('hidden');
        $(this).addClass('play');
      }
    });
  });

  //CounterScroll
  let i = 1;

  $('.onScrollCounter').each(function () {
    $(window).scroll((e) => {
      let scroll = $(window).scrollTop() + $(window).height();
      const breakSec = $(this).offset().top + 100;

      if (scroll > breakSec && i == 1) {
        count();
        i++;
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
          duration: 2000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now).toLocaleString());
          },
        }
      );
  });
}
