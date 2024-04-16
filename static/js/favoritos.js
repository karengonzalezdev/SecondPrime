/* Add to favorites*/
const addToFavorites = document.querySelectorAll(".addToFav");
addToFavorites.forEach(heart => {
    heart.addEventListener("click", addToFavClicked);
   
});


const favItemsContainer = document.querySelector(".favItemsContainer");

function addToFavClicked(event) {
    const Icon = event.target;
    const item = Icon.closest(".product-list");

    const productImg = item.querySelector(".img-fluid").src;
    const productName = item.querySelector(".product-name").textContent;

    addItemToFavorites(productImg, productName)

}

function addItemToFavorites(productImg, productName) {
    const favRow = document.createElement("div");
    const favContent = `
    <div class="col-card col-sm-6 col-lg-4" id="removeFav">
        <a href="#" class="d-block text-center mb-4">
            <div class="product-list">
                <div class="product-image position-relative">
                    <div class="row"><i id= "heart" onclick={btnFavClicked} class="bi bi-heart-fill addToFav"></i></div>
                    <img src="${productImg}"
                        alt="products" class="img-fluid product-image-first"
                        data-lazy-src="assets/images/p1.jpg"><noscript><img src="assets/images/p1.jpg"
                            alt="products" class="img-fluid product-image-first"></noscript>                                
                </div>
                <div class="product-name pt-3">
                    <h3 class="text-capitalize">${productName}</h3>
                    <p class="mb-0 amount">$400.00 <del>$580.00</del></p>
                    <div class="py-1">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                    </div>
                    <button type="button" class="add_to_Card">AÑADIR AL CARRITO</button>
                </div>
            </div>
        </a>
    </div>`;
    favRow.innerHTML = favContent;
    favItemsContainer.append(favRow);

    favRow.querySelector('.addToFav').addEventListener('click', removeFav);
}
   

    function removeFav(event){
        const addToFavClicked =event.target;
        addToFavClicked.closest('#removeFav').remove();
    }




//PARA GUARDAR LOS PRODUCTOS FAV Y LLEVARLOS A UN HTML DIFERENTE DE ACUERDO A UN ID DE USUARIO
/**
 * Describir lo que hacemos como user.
 * a) click al corazon (like - unlike)
 * b) ir a seccion de favoritos
 * c) puedes ver tus productos favoritos (unlike)
 * 
 * a) cree un icono que hace un evento que añade los productos favoritos a una seccion especifica de mi html
 * b) crear componente on click tenga un atributo llamado onclick = funcion que llena el corazon y agrega el producto  a favoritos
 * c) funcion en js agregar el corazon lleno Funcion empty heart: (funcion: emptyHeart)
 *      Llenar el corazon y llevarlo a favoritos
 *          +guardar el id del componente en un arraylist en  donde se guardan todos los id de los favoritos y asi solo guardo un dato
 *      
 *      Vaciar el corazon y removerlo de favoritos
 *          +remover el id del componente de un arraylist en donde estan guardados los id de los favoritos}
 * 
 * 
 * d) llevarlo a otras paginas (html)
 *      Hacer funcion de js que llene la pagina con los productos que tienen el id de productos favoritos
 *      Lee el arraylist y hacer una peticion get al servidor (SELECT "nombre" ,"precio", "imagen" FROM productos WHERE id="componentes del array")
 *      Llena la card con los datos del id del producto de favoritos 
 * 
 * 
 * 
 * 
 * 
 */