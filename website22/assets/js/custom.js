
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 60,
  center: true,
  nav: true,
  dots: false,
  lazyLoad: true,
  items: 1,
  navText: [
    "<i class='fas fa-arrow-left'></i>",
    "<i class='fas fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    575: {
      items: 1,
      stagePadding: 0,
      margin: 30,
    },
    769: {
      items: 1,
      stagePadding: 100,
      margin: 30,
    },
    1920: {
      stagePadding: 600,
      margin: 60,
    },
  },
});
$(document).mousemove(function(e) {
  $(".pointer").css({
      left: e.pageX,
      top: e.pageY
  });
});
$(document).ready(function () {


  $(".navbar-toggler").click(function () {
    $("html").toggleClass("show-menu");
  });

  function scrolling() {
    var sticky = $("header"),
      scroll = $(window).scrollTop();

    if (scroll >= 15) sticky.addClass("fixed");
    else sticky.removeClass("fixed");
  }
  scrolling();
  $(window).scroll(scrolling);

  // hide #back-top first
  $("#myBtn").hide();

  // fade in #back-top
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $("#myBtn").fadeIn();
      } else {
        $("#myBtn").fadeOut();
      }
    });

    // scroll body to 0px on click
    $("#myBtn").click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        1000
      );
      return false;
    });
  });
});


$(document).ready(function () {
  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;

  $(".next").click(function () {
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            display: "none",
            position: "relative",
          });
          next_fs.css({ opacity: opacity });
        },
        duration: 600,
      }
    );
  });

  $(".previous").click(function () {
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //Remove class active
    $("#progressbar li")
      .eq($("fieldset").index(current_fs))
      .removeClass("active");

    //show the previous fieldset
    previous_fs.show();

    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            display: "none",
            position: "relative",
          });
          previous_fs.css({ opacity: opacity });
        },
        duration: 600,
      }
    );
  });

  $(".radio-group .radio").click(function () {
    $(this).parent().find(".radio").removeClass("selected");
    $(this).addClass("selected");
  });

  $(".submit").click(function () {
    return false;
  });
});

$(".navbar-collapse ul li").on("click", "li", function () {
  $(".navbar-collapse ul li.active").removeClass("active");
  $(this).addClass("active");
});

$(".btn-blue").click(function(){
  $(".quiz-sections").addClass("hide-section");
});