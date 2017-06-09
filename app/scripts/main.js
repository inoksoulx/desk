function openDesc() {
  openDesc.el;
  $('.product').on('click', function(e) {
    var desc = $(this).find('div.product_desc');

    switch (e.target.className) {
      case 'product_image':
        desc.addClass('active');
        break;

      case 'product_description':
        desc.addClass('active');
        break;

      case 'product_desc active':
        desc.removeClass('active');
        break;

      case 'fa fa-pencil-square-o':
        $('.pop_up_edit').addClass('active');

        var img = this.childNodes[0];
        var price = this.childNodes[1].childNodes[0];
        var description = this.childNodes[2].childNodes[0];

        $('textarea').val(description.innerText);
        $('#edit_price').val(price.innerText.substring(6));
        break;

      case 'fa fa-trash-o':
        var thisToken = this.getAttribute('token');
        var prodList = JSON.parse(localStorage.prodDB);

        var filteredProd = prodList.items.filter(function(obj) {
          var iToken = obj.token;
          if (+thisToken !== iToken) {
            return true;
          } else {
            return false;
          }
        })

        this.remove();
        prodList.items = filteredProd;
        localStorage.setItem('prodDB', JSON.stringify(prodList));
        pagination();

    }
    openDesc.el = this;
  })

  return function() {

    var element = openDesc.el;
    var imgFile = $('#edit_image_file').val();
    var imgUrl = $('#edit_image_input').val();
    var replaceImg = imgFile.replace('C:\\fakepath', 'img');
    var token = element.getAttribute('token');

    var img = element.childNodes[0];
    var price = element.childNodes[1].childNodes[0];
    var description = element.childNodes[2].childNodes[0];

    price.innerText = 'Price: ' + $('#edit_price').val();
    description.innerText = $('#edit_description').val();

    if (imgFile.length !== 0 && imgUrl.length === 0) {
      img.src = replaceImg;
    } else if (imgFile.length !== 0 && imgUrl.length !== 0) {
      alert('Select one image option please.')
    } else if (imgFile.length === 0 && imgUrl.length !== 0) {
      img.src = imgUrl;
    }

    products.items.forEach(function(i) {
      var iToken = i.token;
      if (+token === iToken) {
        for (var variable in i) {
          if (i.hasOwnProperty(variable)) {
            i.description = description.innerText;
            i.price = price.innerText.substring(7);
            i.img = img.src;
          }
        }
      }
    })
    localStorage.setItem('prodDB', JSON.stringify(products));
  }
}

function fadeProd() {
  $('.product').each(function(i) {
    setTimeout(function() {
      $('.product').eq(i).addClass('is-visible');
    }, 100 * i);
  });
}

var matches = document.cookie.match(new RegExp(
  "(?:^|; )" + 'userName'.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
));
var user = matches ? decodeURIComponent(matches[1]) : undefined;

if (user) {

  let wel = $('.login');
  let signOut = $('.sign_out');

  wel.addClass('active').text('Welcome ' + user);
  signOut.addClass('active');

  $('.add_product').addClass('active');

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

$('.sign_out').on('click', function(event) {

  let wel = $('.login');
  let signIn = $('.sign_in');
  let signUp = $('.sign_up');

  $(this).removeClass('active');
  wel.removeClass('active').text(' ');
  signUp.addClass('active');
  signIn.addClass('active');

  $('.add_product').removeClass('active');

  deleteCookie('userName');
  $('.product').find('i').remove();


  window.location.reload();
  window.location.href = 'http://localhost:9000';
  event.preventDefault();

})



if (!localStorage.prodDB) {
  var prod;
  $.getJSON("scripts/product.json", function(res) {

    var item = res.items;
    item.forEach(function(e, i) {
      e.token = Date.now() + i;
    })
    prod = res;
    localStorage.setItem('prodDB', JSON.stringify(prod));
  })


  drawProd();
  openDesc();
  pagination();

  $('.product').css('opacity', '1');
  $('.product_container').css('left', '0%');
  $('.page > a').eq(0).addClass('active');

} else {
  var products = JSON.parse(localStorage.prodDB);

  drawProd();
  openDesc();
  pagination();

  $('.product').css('opacity', '1');
  $('.product_container').css('left', '0%');
  $('.page > a').eq(0).addClass('active');
}
