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

});
