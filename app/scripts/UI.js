$(document).ready(function(){

  $('.category').hover(
      function() {
      $('.list_category > span').css('opacity', '0');
    }, function() {
      $('.list_category > span').css('opacity', '1');
    }
  );


$('.sign_in').on('click', function() {
  $('.pop_up_sign-in').addClass('active');
})
$('.sign_up').on('click', function() {
  $('.pop_up_sign-up').addClass('active');
})
$('#close_popup_in').on('click', function() {
  $('.pop_up_sign-in').removeClass('active');
})
$('#close_popup_up').on('click', function() {
  $('.pop_up_sign-up').removeClass('active');
})

var pages = $('.pagination li');

pages.bind('click', function(event){
  event.preventDefault();
  var listItems = $('.page').length;
  switch (this.className) {
    case 'prev':
      if (Math.round(parseFloat($('.product_container').get(0).style.left)) !== 0) {
        $('.product_container').animate({
          left: '+=100%'
        }, 1000);
      }
      return;
      break;
    case 'next':
      if (Math.round(parseFloat($('.product_container').get(0).style.left)) !== Math.round((listItems - 1) * 100 * -1)) {
        $('.product_container').animate({
          left: '-=100%'
        }, 1000)
      }
      break;
    default:

  }
})

});
