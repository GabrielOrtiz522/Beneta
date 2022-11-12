// ****** Efectos de Botones ******

vaciarCarrito.addEventListener("click", () => {
    Swal.fire( {
        title: "Carrito Eliminado",
        icon: "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#2d5150",
        background:"#F4EAD2",
    })
})

confirmarCompra.addEventListener("click", () => {
    Swal.fire( {
        title: "¡Gracias por realizar tu compra en Beneta Delimarket!",
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#2d5150",
        background:"#F4EAD2",
    })
})
