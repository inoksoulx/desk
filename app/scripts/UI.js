var pages = $('.pagination');
var currentPage = 1;

var flag = false;

pages.on('click', function(event){

  var a = $('.page > a');
  var target = event.target;

  var listItems = $('.page').length;
  switch (target.parentNode.className) {

    case 'prev':
      if (Math.round(parseFloat($('.product_container').get(0).style.left)) !== 0) {
        if( flag ) return false;
        flag = true;
        $('.product_container').animate({
          left: '+=100%',
        }, 500, function(){
          flag = false;
        });
      };
      if (currentPage !== 1) {
        currentPage -= 1;
      }
      checkPage(a);
      break;

    case 'next':
      if (Math.round(parseFloat($('.product_container').get(0).style.left)) !== Math.round((listItems - 1) * 100 * -1)) {
        if( flag ) return false;
        flag = true;
        $('.product_container').animate({
          left: '-=100%'
        }, 700, function(){
          flag = false;
        });
      }
      if (currentPage !== listItems) {
        currentPage += 1;
      }
      checkPage(a)
      break;

    case 'page':
      var num = +target.innerHTML;
      console.log(num)
      if (currentPage < num) {
        $('.product_container').animate({
          left: '+=' + (num - currentPage) * -100 + '%'
        }, 700);
        currentPage = num;
      } else {
        $('.product_container').animate({
          left: '-=' + (num - currentPage) * 100 + '%'
        }, 700);
        currentPage = num;
      }
      checkPage(a);
      break;
    default:

  }

  event.preventDefault();
})

function checkPage(a){
  for (var i = 0; i < a.length; i++) {
    if (+a[i].innerHTML == currentPage) {
      a.removeClass('active');
      a[i].className = 'active';
    }
  }
}

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
