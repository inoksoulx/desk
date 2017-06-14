

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
      divDesc,
      iMod;

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
    divInfo.id = 'info';

    divDesc = document.createElement('div');
    divDesc.classList.add('product_desc');
    divDesc.id = 'desc';

    divI = document.createElement('div');
    divI.classList.add('edit');
    divI.id = 'edit';

    iEdit = document.createElement('i');
    iEdit.classList.add('fa', 'fa-pencil-square-o');
    iEdit.id = 'edit_icon';

    iTrash = document.createElement('i');
    iTrash.classList.add('fa', 'fa-trash-o');
    iTrash.id = 'remove_icon';

    iMod = document.createElement('i');
    iMod.classList.add('fa', 'fa-check');
    iMod.id = 'mod_icon';

    img = document.createElement('img');
    img.classList.add('product_image');
    img.src = imgSrc;
    img.id = 'image';

    spanDes = document.createElement('span');
    spanDes.classList.add('product_description');
    spanDes.innerText = description;
    spanDes.id = 'el_desc'

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


      if (moderated === 'true' && typeProd === type && user !== 'admin@gmail.com') {
          if( user === who ){
            div.append(img, divInfo, divDesc, divI);
            container.append(div);
          } else {
            div.append(img, divInfo, divDesc);
            container.append(div);
          }
      } else if(moderated === 'true' && type === false && user !== 'admin@gmail.com') {
        if( user === who ){
          div.append(img, divInfo, divDesc, divI);
          container.append(div);
        } else {
          div.append(img, divInfo, divDesc);
          container.append(div);
        }
      } else {
        if (user === 'admin@gmail.com' && type === false && moderated !== 'true' ) {
          div.append(img, divInfo, divDesc, divI, iMod);
          container.append(div);
          divInfo.style.border = '2px solid rgb(245, 97, 97)'
        } else if(user === 'admin@gmail.com' && type === typeProd && moderated !== 'true'){
          div.append(img, divInfo, divDesc, divI, iMod);
          container.append(div);
          divInfo.style.border = '2px solid rgb(245, 97, 97)'
        }
      }


  })
}
