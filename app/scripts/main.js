function openDesc(){
  $('.product').on('click', function(){
  var desc = $(this).find('div.product_desc');
  desc.toggleClass('active');
})
}

function fadeProd() {
  $('.product').each(function(i){
    setTimeout(function(){
      $('.product').eq(i).addClass('is-visible');
    }, 100 * i);
  });
}

var matches = document.cookie.match(new RegExp(
  "(?:^|; )" + 'userName'.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
));
var user = matches ? decodeURIComponent(matches[1]) : undefined;

$.getJSON("scripts/product.json", function(res) {

  var container = $('.work-belt'),
      item = res.items,
      div,
      img,
      spanDes,
      spanAuthor,
      spanPrice,
      spanDate,
      divI,
      iEdit,
      iTrash,
      divInfo,
      divDesc;


  item.forEach(function(i) {
    var imgSrc = i.img,
        description = i.description,
        date = i.date,
        who = i.author,
        price = i.price,
        moderated = i.moderated;

    div = document.createElement('div');
    div.classList.add('product');

    divInfo = document.createElement('div');
    divInfo.classList.add('product_info');

    divDesc = document.createElement('div');
    divDesc.classList.add('product_desc');

    divI = document.createElement('div');

    iEdit = document.createElement('i');
    iEdit.classList.add('fa', 'fa-pencil-square-o');

    iTrash = document.createElement('i');
    iTrash.classList.add('fa', 'fa-trash-o');

    img = document.createElement('img');
    img.src = imgSrc;

    spanDes = document.createElement('span');
    spanDes.classList.add('product_description');
    spanDes.innerText = description;

    spanAuthor = document.createElement('span');
    spanAuthor.classList.add('product_author');
    spanAuthor.innerText = 'Author: ' + who;

    spanPrice = document.createElement('span');
    spanPrice.classList.add('product_price');
    spanPrice.innerText = 'Price: ' + price;

    spanDate = document.createElement('span');
    spanDate.classList.add('product_date');
    spanDate.innerText = 'Date: ' + date;

    divI.append(iEdit, iTrash);
    divInfo.append(spanPrice, spanDate);
    divDesc.append(spanDes, spanAuthor);

    if (moderated === 'true') {
      if( user === who ){
        div.append(img, divInfo, divDesc, divI);
        container.append(div);
      } else {
        div.append(img, divInfo, divDesc);
        container.append(div);
      }
    }
  })
  openDesc();
  $('.product').css('opacity', '1');
})

if (user) {

  let wel = $('.login');
  let signOut = $('.sign_out');

  wel.addClass('active').text('Welcome ' + user);
  signOut.addClass('active');

  window.location.hash = user;

} else {

  let signIn = $('.sign_in');
  let signUp = $('.sign_up');

  signUp.addClass('active');
  signIn.addClass('active');

}

function setCookie(name, value, options) {

  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}

function deleteCookie(name) {

  setCookie(name, "", {
    expires: -1
  })

}

$('#sign_in_form').on('submit', (event) => {

  let email = $('#sign_in_email').val();
  let pass = $('#sign_in_pass').val();
  let wel = $('.login');
  let existUser = JSON.parse(localStorage.database);
  let signOut = $('.sign_out');


  if (base.getUser(email, pass)) {
    wel.addClass('active').text('Welcome ' + email);
    signOut.addClass('active');
    setCookie('userName', email, {
      expires: 3600
    })
    $('.pop_up_sign-in').removeClass('active');

    window.location.reload();
  } else {
    alert('Invalid login/pass');
  }

  event.preventDefault();


})

$('.sign_out').on('click', function(event){

  let wel = $('.login');
  let signIn = $('.sign_in');
  let signUp = $('.sign_up');

  $(this).removeClass('active');
  wel.removeClass('active').text(' ');
  signUp.addClass('active');
  signIn.addClass('active');

  deleteCookie('userName');
  $('.product').find('i').remove();

  window.location.hash = '';
  event.preventDefault();

})
