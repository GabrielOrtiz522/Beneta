// ****** Catálogo de Productos ******
// ****** Beneta Delimarket ******

// Copy&Paste - JSON
// {"nombre": ,"cantidad": ,"precio": , "id": , "img": }

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

const contenedorProductos = document.getElementById ("contenedor-productos");

const contenedorCarrito = document.getElementById ("carrito-contenedor")

const botonVaciar = document.getElementById ("vaciar-carrito")

const contadorCarrito = document.getElementById ("contadorCarrito")

const precioTotal = document.getElementById ("precioTotal")

document.addEventListener ("DOMContentLoaded", () => {
    if (localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"))
        actualizarCarrito()
    }
}) // Local Storage

let carrito = [] // Array vacio de productos

stockProductos.forEach ((producto) => {
    const div = document.createElement("div")
    div.classList.add("producto")
    div.innerHTML += `
            <div class="card">
                <img src="${producto.img}" class="imgProductos" alt="">
                 <div class="card-body">
                    <h5 class="card-tittle"> ${producto.nombre} </h5>
                    <p class="card-text"> Precio: $${producto.precio} </p>
                    <button class="btn colorBoton" id="agregar${producto.id}"> Agregar al Carrito </button>
                </div>
            </div>
            `
            contenedorProductos.appendChild(div); // Muestra el div creado en el HTML

            const boton = document.getElementById(`agregar${producto.id}`) 
            boton.addEventListener("click", () => {
                agregarAlCarrito(producto.id)
            }) // Agrega el producto al Array con el boton "Agregar al Carrito"
});

const agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId)
    if (existe){ 
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }

    actualizarCarrito() 

}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find ((prod) => prod.id === prodId) // Buscamos con find dentro del carrito
    const indice = carrito.indexOf (item) // Buscamos el indice
    carrito.splice (indice, 1) // Y descuenta -1
    actualizarCarrito()
}

botonVaciar.addEventListener ("click", () =>{
    carrito.length = 0 // Elimina todos los productos hasta llegar a 0
    actualizarCarrito()

    //localStorage: Cuando se vacie el carrito por completo, se elimina del LS
    localStorage.clear();
})

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement("div")
        div.className = ("productoEnCarrito")
        div.innerHTML = `
        <p> ${prod.nombre} </p>
        <p> Precio: ${prod.precio} </p>
        <p> Cantidad: <span id="cantidad"> ${prod.cantidad} </span> </p>
        <button onclick = "eliminarDelCarrito(${prod.id})" class= "boton-eliminar"><i class= "fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(div)

        // Local Storage
        localStorage.setItem("carrito", JSON.stringify(carrito))
    })

    contadorCarrito.innerText = carrito.length; // Iguala la cantidad de productos agregados en el HTML
    precioTotal.innerText = carrito.reduce ((acc, prod) => acc + prod.cantidad * prod.precio, 0) // Por cada producto que recorra el carrito, el acc suma la propiedad precio

}

