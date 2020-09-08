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

    if (scroll > screenHeight * 0.1) {
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
        backgroundColor: "unset",
        boxShadow: "unset",
      });
      $("nav .logo").css({
        color: "var(--black)",
      });
    }
  });
});
