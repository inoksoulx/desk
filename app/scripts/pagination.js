function pagination() {
  var items = $('.work-belt').children();
  var section = $('.product_container');
  var listItems = [];

  if (items.length > 12 ) {
    for (var i = 0; i < items.length; i++) {
      var part = items.splice(0, 12);
      listItems.push(part);
    }

    var lostPart = [];
    for (var i = 0; i < items.length; i++) {
      if(!Array.isArray(items[i])){
        lostPart.push(items[i]);
      }
    }

    if (lostPart.length !== 0) {
      listItems.push(lostPart);
    }

    console.log(listItems);

    for (var i = 0; i < listItems.length; i++) {
      var li = document.createElement('li');
      li.classList.add('page');

      var a = document.createElement('a');

      a.innerHTML = i + 1;

      li.append(a);

      $('.next').before(li);
    }

    listItems.splice(0, 1);

    listItems.forEach(function(i) {
      var belt = document.createElement('div');
      belt.classList.add('work-belt');

      i.forEach(function(i){
        belt.append(i);
      })

      section.append(belt);

    })

    var width = (listItems.length + 1);

    $('.product_container').css('width', width * 100 + '%');
    $('.work-belt').css('width', 100 / width + '%');

    $('.pagination').addClass('active');



  } else {
    $('.pagination').removeClass('active');
    console.log(listItems);
  }

  $('.page > a').eq(0).addClass('active');
  $('.page > a').eq($('.page > a').length / 2).addClass('active');

  currentPage = 1;

}
