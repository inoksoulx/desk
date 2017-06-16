$('#edit_button').on('click', function(e) {
  e.preventDefault();
  openDesc()();

  $('.pop_up_edit').removeClass('active');
})

$('#close_popup_edit').on('click', function(e) {
  $('.pop_up_edit').removeClass('active');
});

$('.add_product').on('click', function() {
  $('.pop_up_add').addClass('active');
})

$('#close_popup_add').on('click', function(e) {
  $('.pop_up_add').removeClass('active');
});

$('#add_form').submit(function(e) {

  var newProd = {};

  var imgFile = $('#add_image_file').val();
  var imgUrl = $('#add_image_input').val();
  var replaceImg = imgFile.replace('C:\\fakepath', 'img');
  var descProd = $('#add_description').val();
  var priceProd = $('#add_price').val();
  var categoryProd = $('#add_category').val();

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  var today = dd + '.' + mm + '.' + yyyy;

  if (imgFile.length !== 0 && imgUrl.length !== 0) {
    alert('Select one image option please.')
  } else if (descProd.length === 0) {
    alert('Add description.');
  } else if (priceProd.length === 0) {
    alert('Add price');
  } else {

    newProd.img = replaceImg || imgUrl;
    newProd.description = descProd;
    newProd.date = today;
    newProd.author = user;
    newProd.price = priceProd;
    newProd.moderated = 'true';
    newProd.type = categoryProd;
    newProd.token = Date.now();


    var prodList = JSON.parse(localStorage.prodDB);

    prodList.items.push(newProd);
    localStorage.setItem('prodDB', JSON.stringify(prodList));

    $('.pop_up_add').removeClass('active');

    
    refr();   
  }

  
})
