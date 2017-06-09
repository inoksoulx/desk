function drawProd(prod, type){

  var container = $('.work-belt'),
      item = prod || products.items,
      type = type || false,
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
        moderated = i.moderated,
        typeProd = i.type,
        token = i.token;


    div = document.createElement('div');
    div.classList.add('product');
    div.setAttribute('token', token);
    div.setAttribute('type', typeProd);

    divInfo = document.createElement('div');
    divInfo.classList.add('product_info');

    divDesc = document.createElement('div');
    divDesc.classList.add('product_desc');

    divI = document.createElement('div');
    divI.classList.add('edit');

    iEdit = document.createElement('i');
    iEdit.classList.add('fa', 'fa-pencil-square-o');

    iTrash = document.createElement('i');
    iTrash.classList.add('fa', 'fa-trash-o');

    img = document.createElement('img');
    img.classList.add('product_image');
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


      if (moderated === 'true' && typeProd === type) {
          if( user === who ){
            div.append(img, divInfo, divDesc, divI);
            container.append(div);
          } else {
            div.append(img, divInfo, divDesc);
            container.append(div);
          }
      } else if(moderated === 'true' && false === type) {
        if( user === who ){
          div.append(img, divInfo, divDesc, divI);
          container.append(div);
        } else {
          div.append(img, divInfo, divDesc);
          container.append(div);
        }
      }


  })
}
