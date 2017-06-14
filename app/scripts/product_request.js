var category = $('.category');

category.on('click', function(event) {

  var type = event.target.innerHTML.toString().toLowerCase();
  console.log(type);

  $('div.product').remove();

  if ($('.product_container').children().length > 1) {
    $('.work-belt ~').remove();
  }

  if ($('.page')){
    $('.page').remove();
  }

  $('.product_container').css('left', '0');

    drawProd(null, type);

    fadeProd();
    pagination();
    openDesc();
})

$('.back_main').on('click', function () {
  $('div.product').remove();

  if ($('.product_container').children().length > 1) {
    $('.work-belt ~').remove();
  }

  if ($('.page')){
    $('.page').remove();
  }

  $('.product_container').css('left', '0');

    drawProd(null, false);

    fadeProd();
    pagination();
    openDesc();
})
