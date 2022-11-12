// ****** Comentarios 100% reales de Beneta Delimarket ******

const contenedorComentarios = document.getElementById("contenedorComentarios");

const listadoComentarios = "../json/comentarios.json";

fetch(listadoComentarios)
    .then(respuesta => respuesta.json())
    .then(datos => {
        datos.forEach( datos => {
            contenedorComentarios.innerHTML += `
                <div class="comentariosReales">
                    <img src=" ${datos.img} " width="100px">
                    <p> Nombre y Apellido: ${datos.nombre}</p>
                    <p> Email: ${datos.email} </p>
                    <p> Dice... "${datos.comentario}" </p>
                </div>
                `
        })
    })
    .catch(error => console.log(error));