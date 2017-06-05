function pagination() {
  var items = $('.work-belt').children();
  // var section = $('.product_container');
  var section = $('.product_container');
  var belt = $('.work-belt');

  // var belt = document.createElement('div');
  //
  // belt.classList.add('work-belt');

  if (items.length > 12 ) {
    var s = [];
    for (var i = 0; i < items.length; i++) {
      var part = items.splice(0, 12);
      s.push(part);
    }

    var lostPart = [];
    for (var i = 0; i < items.length; i++) {
      if(!Array.isArray(items[i])){
        lostPart.push(items[i]);
      }
    }

    if (lostPart.length !== 0) {
      s.push(lostPart);
    }
    console.log(s);
    s.splice(0, 1);

    s.forEach(function(i) {
      var belt = document.createElement('div');
      belt.classList.add('work-belt');

      i.forEach(function(i){
        belt.append(i);
      })

      section.append(belt);

      console.log(i)
    })

    var width = (s.length + 1);

    section.css('width', width * 100 + '%');
    $('.work-belt').css('width', 100 / width + '%');


  }
}
