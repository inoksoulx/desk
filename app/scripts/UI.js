var pages = $('.pagination');
var currentPage = 1;

var flag = false;

pages.on('click', function(event){
  event.preventDefault();
  var a = $('.page > a');
  var target = event.target;

  var listItems = $('.page').length / 2;
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
      if (Math.round(parseFloat($('.product_container').get(0).style.left)) !==
          Math.round((listItems - 1) * 100 * -1)) {
        if( flag ) return false;
        flag = true;
        $('.product_container').animate({
          left: '-=100%'
        }, 500, function(){
          flag = false;
        });
      }
      if (currentPage !== listItems ) {
        currentPage += 1;
      }
      checkPage(a)
      break;

    case 'page':
      var num = +target.innerHTML;
      if( flag ) return false;
      flag = true;
      if (currentPage < num) {
        $('.product_container').animate({
          left: '+=' + (num - currentPage) * -100 + '%'
        }, 700, function () {
          flag = false;
        });
        currentPage = num;
      } else {
        $('.product_container').animate({
          left: '-=' + (num - currentPage) * 100 + '%'
        }, 700, function () {
          flag = false;
        });
        currentPage = num;
      }
      checkPage(a);
      break;
    default:

  }
})

function checkPage(a){
  $('.pagination li > a').removeClass('active');
  for (var i = 0; i < a.length; i++) {
    if (+a[i].innerHTML == currentPage) {
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
  $('.pop_up_sign').addClass('active');
})

$('#close_popup_in').on('click', function() {
  $('.pop_up_sign').removeClass('active');
})

$(".info-item .btn").click(function(){
  $(".container").toggleClass("log-in");
});
// $(".container-form .btn").click(function(){
//   $(".container").addClass("active");
// });


var fileInput  = document.querySelector( ".input-file" ),  
    button     = document.querySelector( ".input-file-trigger" ),
    the_return = document.querySelector(".file-return");

    fileInput.addEventListener('change', handleImage, false);
    var canvas = document.getElementById('imageCanvas');
    var ctx = canvas.getContext('2d');
    
      
fileInput.addEventListener( "change", function( event ) {  
    the_return.innerHTML =  this.value.replace(/C:\\fakepath\\/i, '');
    canvas.style.display="block";
});  


function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img,0,0);
            $('#add_image_file').css('top', $('.input-file-trigger').position().top + 'px')
        }
        img.src = event.target.result;
        canvas.height = img.height; 
    }


    if(e.target.files.length != 0){
      reader.readAsDataURL(e.target.files[0]);
    } else {
      canvas.height = 0
      $('#add_image_file').css('top', 0 + 'px');
    }
   
}