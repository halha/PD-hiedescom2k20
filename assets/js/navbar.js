$(document).ready(() => {
  $("nav .show").click(() => {
    $("nav ul").css({
      right: "0",
    });
  });

  $("nav ul .hide").click(() => {
    $("nav ul").css({
      right: "-100%",
    });
  });

  // Scroll function
  $(window).scroll((e) => {
    let scroll = $(window).scrollTop();
    let screenHeight = window.innerHeight;

    if (scroll > screenHeight * 0.5) {
      $("nav").addClass("fixed");
      $("nav .show").removeClass("black");
      $("nav .hide").removeClass("black");
      $("nav ul").removeClass("primary");

      $("nav").css({
        backgroundColor: "var(--white)",
        boxShadow: "0 6px 12px rgba(0, 0, 0, .1)",
      });
      $("nav .logo").css({
        color: "var(--black)",
        visibility: "visible",
      });
    } else {
      $("nav").removeClass("fixed");
      $("nav .show").addClass("black");
      $("nav .hide").addClass("black");
      $("nav ul").addClass("primary");

      $("nav").css({
        boxShadow: "unset",
      });
      $("nav .logo").css({
        color: "var(--black)",
      });
    }
  });
});

$(document).ready(() => {
  // scroll function
  $(".onScroll").each(function () {
    $(window).scroll((e) => {
      let scroll = $(window).scrollTop() + $(window).height();
      const breakSec = $(this).offset().top;
      if (scroll > breakSec) {
        $(this).removeClass("hidden");
        $(this).addClass("play");
      } else if (scroll > breakSec - 2000) {
        $(this).addClass("hidden");
        $(this).removeClass("play");
      }
    });
  });
});

$(".play.count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 1500,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});
