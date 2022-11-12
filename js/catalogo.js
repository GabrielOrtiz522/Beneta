// ****** Catálogo de Productos ******
// ****** Beneta Delimarket ******

const contenedorProductos = document.getElementById ("contenedor-productos");

const contenedorCarrito = document.getElementById ("carrito-contenedor")

const botonVaciar = document.getElementById ("vaciarCarrito")

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
                    <button class="btn colorBoton" id="agregarProducto${producto.id}"> Agregar al Carrito </button>
                </div>
            </div>
            `
            contenedorProductos.appendChild(div); // Muestra el div creado en el HTML

            const boton = document.getElementById(`agregarProducto${producto.id}`) 
            boton.addEventListener("click", () => {
                agregarAlCarrito(producto.id) // Agrega el producto al Array con el boton "Agregar al Carrito"

                Toastify({ // Efecto al agregar producto al carrito (Si estaba en efectos.js no me lo tomaba)
                    text:"Producto agregado al carrito",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    style:
                    {
                    background: "linear-gradient(to right, #226c6b, #2d5150)",
                    }
                }).showToast();
            }) 
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