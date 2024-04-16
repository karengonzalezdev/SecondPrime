//Array de los botones
const addToShoppingCartButtons = document.querySelectorAll('.add_to_Card');
addToShoppingCartButtons.forEach(addButton => {
    addButton.addEventListener('click', buttonClicked);
    // console.log(botonClicked);
});


const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer')

//Capturar el target del event
function buttonClicked(event) {
    const button = event.target;
    // console.log(boton);
    const item = button.closest('.product-list');

    //Obtener los datos del producto
    const itemTitle = item.querySelector('.text-capitalize').textContent;
    const itemPrice = item.querySelector('.mb-0').textContent;
    const itemImage = item.querySelector('.img-fluid').src;
    //console.log(itemTitle, itemPrice, itemImage);

    addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}

//Agregar productos al carrito
function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
    const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
      'shoppingCartItemTitle'
    );
    for (let i = 0; i < elementsTitle.length; i++) {
      if (elementsTitle[i].textContent === itemTitle) {
        let elementQuantity = elementsTitle[
          i
        ].parentElement.parentElement.parentElement.querySelector(
          '.shoppingCartItemQuantity'
        );
        elementQuantity.value++;
        updateShoppingCartTotal();
        return;
      }
    }

    //console.log(itemTitle, itemPrice, itemImage);
    const shoppingCartRow = document.createElement('tr');
    const shoppingCartContent = `
    <div class="container shoppingCartItem">
  <div class="row">
<<<<<<< HEAD
    <div class="col-4">
        <div class="shopping-cart-quantity d-flex row mb-5">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
=======
    <div class="col-3">
        <div class="shopping-cart-quantity d-flex">
                <i class="bi bi-trash3 buttonDelete" type="button"></i>
>>>>>>> 14c574d46e5a5234f2baca198afb147951a9ef17
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
            </div>
    </div>
    <div class="col-3">
        <img src=${itemImage} class="shopping-cart-image">
    </div>
    <div class="col-3">
        <h6 class="shopping-cart-item-title shoppingCartItemTitle">${itemTitle}</h6>
    </div>
    <div class="col-3">
    <div class="shopping-cart-price">
        <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
    </div>
  </div>
 </div>`;

        //Insertar productos al carrito
    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);

    //Eliminar producto del carrito
    shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem);

    //Añadir duplicados al mismo producto
    shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanged);

        //actualizar el total del carrito
    updateShoppingCartTotal();

}

function updateShoppingCartTotal(){
    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
    //console.log(shoppingCartTotal);
    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');
    console.log(shoppingCartItems); 
    //Lee los datos actuales del carrito

    shoppingCartItems.forEach(shoppingCartItem =>{
        //Obtiene el valor del carrito
        const shoppingCartItemPriceProduct = shoppingCartItem.querySelector('.shoppingCartItemPrice');
        const shoppingCartItemPrice = shoppingCartItemPriceProduct.textContent.replace('$','');
        //console.log(shoppingCartItemPrice); Quitar el $ del precio
        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity');
        //console.log(shoppingCartItemQuantityElement);
        const shoppingCartItemQuantity = Number (shoppingCartItemQuantityElement.value);
        //console.log(shoppingCartItemQuantity);
        total += shoppingCartItemPrice * shoppingCartItemQuantity; //Calcular el total
        //console.log(total);
    });

    shoppingCartTotal.innerHTML = `$${total.toFixed(2)}`
}

 //Eliminar items  
function removeShoppingCartItem(event){
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove(); //Eliminar producto del carrito más proximo
    updateShoppingCartTotal();
}

//Modificar cantidad del mismo item
function quantityChanged(event){
    const input = event.target;
    input.value <= 0? (input.value =1) : null;
    updateShoppingCartTotal();
}

//Agregar a LocalStorage
// function itemsLS{
//   let shoppingCartContent = [];
//   if(localStorage.getItem('shoppingCartItemsContainer')){
//     shoppingCartContent = JSON.parse(localStorage.getItem('shoppingCartItemsContainer'));
// }
// shoppingCartContent.push({'productId' : productId + 1, image : '<imageLink>'});
// localStorage.setItem('products', JSON.stringify(products));

// }