// ****** Catálogo de Productos ******
// ****** Beneta Delimarket ******

// Copy&Paste - JSON
// {"nombre": , "precio": , "id": , "img": }

/*
// Trae los productos del JSON al html:

const catalogo = document.getElementById("catalogo");
const producto = "../json/stock-productos.json";

fetch(producto)
    .then(respuesta => respuesta.json())
    .then(datos => {
        datos.forEach( producto => {
            catalogo.innerHTML += `
            <div class="card">
                <img src="${producto.img}" class="imgProductos" alt="">
                 <div class="card-body">
                    <h5 class="card-tittle"> ${producto.nombre} </h5>
                    <p class="card-text"> Precio: $${producto.precio} </p>
                    <button class="btn colorBoton" id="boton ${producto.id}"> Agregar al Carrito </button>
                </div>
            </div>
            `
        })
    })
    .catch(error => console.log(error));
*/
