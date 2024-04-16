console.log("Productos");
// alt + 96 = `


/**
 * Función que trae los datos de API en https://reqres.in/
 * @param {Numeric} page le pasamos el número de página que deseamos ver
 */
function buscaUsuario(page= 1){
    console.log("Busca Productos");

    // fetch(`https://reqress.in/api/users/23`)
    /**
     * Función fetch que nos trae los datos asíncronos de la página
     * @param {asinc} response es la respuesta de la página y lo transformamos a formato JSON para consumir los datos
     * @param {asinc} users el arreglo que traemos de los usuarios de la página
     */
    fetch(`https://reqres.in/api/users?page=1`)    
    .then((response)=>response.json())
    .then(products=>{
        console.log(products);
        let products_body = document.getElementById("products_body");
        products_body.innerHTML="";
        /**
         * Llenado de card
         */
        for (let product of products.data) {
            console.log(product.user);
            products_body.innerHTML += `                        
            <div class="col-card col-sm-6 col-lg-4">
                    <a href="#" class="d-block text-center mb-4">
                        <div class="product-list">
                            <div class="product-image position-relative">
                                <div class="row"><i class="bi bi-heart"></i></div>
                                <img src="${product.avatar}" alt="products"
                                    class="img-fluid product-image-first"
                                    data-lazy-src="assets/images/p4.jpg"><noscript><img src="assets/images/p4.jpg"
                                        alt="products" class="img-fluid product-image-first"></noscript>
                            </div>
                            <div class="product-name pt-3">
                                <h3 class="text-capitalize">${product.id}: ${product.first_name}</h3>
                                <p class="mb-0 amount">${product.last_name} $</p>
                                <div class="py-1">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star"></i>
                                </div>
                                <button type="button" class="add_to_Card">AÑADIR AL CARRITO</button>
                            </div>
                        </div>
                    </a>
                </div>`;

        }
    })
    .catch(error =>{
        console.log("Error :( ... :", error);
    })
    ;
}
