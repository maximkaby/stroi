$(function () {
  $.fn.extend({
    animateCss: function (animationName, callback) {
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      this.addClass('animated ' + animationName).one(animationEnd, function () {
        $(this).removeClass('animated ' + animationName);
        if (callback) {
          callback();
        }
      });
      return this;
    }
  });


var options = [
  {selector: '.head__h1', offset: 150, callback: function(el) {
    $('.head__h1').animateCss('fadeInDown').css({'opacity':1});
  }},
  {selector: '#p', offset: 150, callback: function(el) {
    $('#p').animateCss('fadeInUp').css({'opacity':1});
  }},
  {selector: '.advantages__title', offset: 150, callback: function(el) {
    $('.advantages__title').animateCss('fadeInDown').css({'opacity':1});
  }},
  {selector: '#item-1', offset: 100, callback: function(el) {
    $('#item-1').animateCss('fadeInLeft').css({'opacity':1});
  }},
  {selector: '#item-2', offset: 120, callback: function(el) {
    $('#item-2').animateCss('fadeInLeft').css({'opacity':1});
  }},
  {selector: '#item-3', offset: 140, callback: function(el) {
    $('#item-3').animateCss('fadeInLeft').css({'opacity':1});
  }},
  {selector: '#item-4', offset: 100, callback: function(el) {
    $('#item-4').animateCss('fadeInRight').css({'opacity':1});
  }},
  {selector: '#item-5', offset: 120, callback: function(el) {
    $('#item-5').animateCss('fadeInRight').css({'opacity':1});
  }},
  {selector: '#item-6', offset: 140, callback: function(el) {
    $('#item-6').animateCss('fadeInRight').css({'opacity':1});
  }},
  {selector: '#advantage-1', offset: 200, callback: function(el) {
  $('#advantage-1').animateCss('fadeInLeft').css({'opacity':1});
  }},
  {selector: '#advantage-2', offset: 200, callback: function(el) {
    $('#advantage-2').animateCss('fadeInRight').css({ 'opacity': 1 });
  }},
  {selector: '#advantage-3', offset: 200, callback: function(el) {
    $('#advantage-3').animateCss('fadeInLeft').css({ 'opacity': 1 });
  }},
  {selector: '#advantage-4', offset: 200, callback: function(el) {
    $('#advantage-4').animateCss('fadeInRight').css({ 'opacity': 1 });
  }},
  {selector: '#advantage-5', offset: 200, callback: function(el) {
    $('#advantage-5').animateCss('fadeInLeft').css({ 'opacity': 1 });
  }}
];

Materialize.scrollFire(options);

  if(screen.height < 768) {
    console.log(screen.height);
    document.getElementById('input-submit').value = 'Написать';
  }
    else {
    document.getElementById('input-submit').value = 'Отправить сообщение';
  }



  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });




});