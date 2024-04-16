/**
 * Consulta los datos de un producto 
 * para llenar las tarjetas del div.products_body
 * 
 * Hace paginación, añadiendo los elementos <a>
 * al HTML y espera a la escucha del evento clic 
 * en los botones #next y #previous
 * para consultar su atributo "href" y así
 * cargar esos datos en el doculent
 * 
 * 
 */

/**
 * Al contar con base de datos
 * Vamos a:
 * - leer los botones de la búsqueda,
 *      Ejemplo, Si hay click en  Equipo Nuevo
 *          Hacer la consulta:
 *          SELECT nombre, precio, #estrellas,img
 *          FROM productos
 *          WHERE equipo = “nuevo”
 *  SUponiendo que se puedan traer en formato JSON, 
 *  el procedimiento es casi el mismo
 *  
 *  Atentos a la escucha del evento pagina, 
 *  traemos los de esa página, mostraremos sólo 
 *  un número limitado de cards por página
 */

const d = document,
    $main = d.querySelector(".products_body"),
    $links = d.querySelector(".links");
let pageN = 1;
let linkAPI = `https://reqres.in/api/users?page=`;


/**
 * Función asíncrona que me trae los datos del producto
 * en formato JSON
 * @param {String} url, de la página a la que voy a hacer GET
 */
async function loadDataProduct(url) {
    try {
        /* Mientras carga los datos */
        $main.innerHTML = `
                <div class="loader spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                `;

        /* Variables */
        let res = await fetch(url),
            json = await res.json(),
            $template = "",
            $prevLink,
            $nextLink;

        console.log(json);
        /* En caso de que no tenga respuesta OK mi fetch, pasa al catch*/
        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        for (let i = 0; i < json.data.length; i++) {
            //console.log(json.data[i]);
            //console.log(json.data[i].first_name,json.data[i].last_name);

            $template += `                        
                    <div class="col-card col-sm-6 col-lg-4">
                            <a href="#" class="d-block text-center mb-4">
                                <div class="product-list">
                                    <div class="product-image position-relative">
                                        <div class="row"><i class="bi bi-heart"></i></div>
                                        <img src="${json.data[i].avatar}" alt="products"
                                            class="img-fluid product-image-first"
                                            data-lazy-src="assets/images/p4.jpg"><noscript><img src="assets/images/p4.jpg"
                                                alt="products" class="img-fluid product-image-first"></noscript>
                                    </div>
                                    <div class="product-name pt-3">
                                        <h3 class="text-capitalize">${json.data[i].id}: ${json.data[i].first_name}</h3>
                                        <p class="mb-0 amount">${json.data[i].last_name} $</p>
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
        $main.innerHTML = $template;

        $prevLink = json.page > 1 ? `<a class="page-link" id="previous" href="${linkAPI}${json.page - 1}">&laquo;</a>` : "";

        $nextLink = json.page < 12 ? `<a class="page-link" id="next" href="${linkAPI}${json.page + 1}">&raquo;</a>` : "";

        $links.innerHTML = json.page == 1 ?
            `
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled"><a class="page-link" id="previous" href="">&laquo;</a></li>
                    <li class="page-item disabled" aria-current="page"><a class="page-link"  id="pag_a" href="#">${json.page - 1}</a>
                    </li>
                    <li class="page-item active"><a class="page-link" id="pag_b" href="#">${json.page}</a></li>
                    <li class="page-item"><a class="page-link" id="pag_c" href="#">${json.page + 1}</a></li>
                    <li class="page-item">${$nextLink}</li>
                </ul>
                `
            :
            `
                <ul class="pagination justify-content-center">
                    <li class="page-item">${$prevLink}</li>
                    <li class="page-item" aria-current="page"><a class="page-link"  id="pag_a" href="#">${json.page - 1}</a>
                    </li>
                    <li class="page-item active"><a class="page-link" id="pag_b" href="#">${json.page}</a></li>
                    <li class="page-item"><a class="page-link" id="pag_c" href="#">${json.page + 1}</a></li>
                    <li class="page-item">${$nextLink}</li>
                </ul>
                `;



    } catch (err) {
        //Muestra el error
        //console.log(err);
        let message = err.statusText || "Ocurrió un Error";
        $main.innerHTML = `<p>ERROR ${err.status}: ${message}</p>`;


    }

}


//-----Carga en el DOM al iniciar------
d.addEventListener("DOMContentLoaded", e => loadDataProduct(`${linkAPI}${pageN}`));

d.addEventListener("click", e => {
    if (e.target.matches(".links a")) {
        //evita hacer algo(no ir a la ruta) y antes puestra un mensaje en pantalla
        e.preventDefault();
        //alert("Funciona");
        //carga y de el target del evento, obten su valor en href
        loadDataProduct(e.target.getAttribute("href"));
    }
});