$(function () {
  'use strick';
  var winH = $(window).height();
  navH = $('.navbar').innerHeight(),
    upperH = $('.upper-bar').innerHeight();
  $('.slider , .carousel-item').height(winH - (upperH + navH));
  // Recent Work Section
  $('.recent-work ul li').on('click', function () {
    $(this).css('color', 'blue').siblings().css('color', '#b3b6bc');
    var info = $(this).data('class');

  });



});

/*global $, jQuery, alert*/

$(document).ready(function () {

  "use strict";



  $('.carousel').carousel({

    interval: 6000

  });

  // Show Color Option Div When Click On The Gear

  $(".gear-check").click(function () {

    $(".color-option").fadeToggle();

  });

  // Change Theme Color On Click

  var colorLi = $(".color-option ul li"),

    scrollButton = $("#scroll-top");

  colorLi.eq(0).css("backgroundColor", "#E60024").end()

    .eq(1).css("backgroundColor", "#E426D5").end()

    .eq(2).css("backgroundColor", "#009AFF").end()

    .eq(3).css("backgroundColor", "#FFD500");

  colorLi.click(function () {

    $("link[href*='theme']").attr("href", $(this).attr("data-value"));

  });

  // Caching The Scroll Top Element

  $(window).scroll(function () {

    if ($(this).scrollTop() >= 700) {

      scrollButton.show();

    } else {

      scrollButton.hide();
    }
  });
  //to make nav bar
  var winH = $(window).height();
  navH = $('.navbar').innerHeight(),
    upperH = $('.upper-bar').innerHeight();
  $('.slider , .carousel-item').height(winH - (upperH + navH));
  $(window).scroll(function () {

    if ($(this).scrollTop() >= 100) {

      $('.upper-bar').css('display', 'none');
      $('.spec').css('margin-top', '200px');
      $('nav').addClass('fixed-top');
      $('.slider , .carousel-item').height(winH);


    } else {

      $('.upper-bar').css('display', 'block');
      $('.spec').css('margin-top', '30px');
      $('nav').removeClass('fixed-top');
      $('.slider , .carousel-item').height(winH - (upperH + navH));
    }
  });
  // Click On Button To Scroll Top

  scrollButton.click(function () {

    $("html,body").animate({ scrollTop: 0 }, 600);

  });

});


//to make loading screen
//why not load ????
$(window).on('load', function () {
  $(".load_overlay .sk-cube-grid").fadeOut(2000,
    function () {
      $(this).parent().fadeOut(2000,
        function () {
          $(this).remove();
        });
      $("body").css("overflow", "auto");
    });
});