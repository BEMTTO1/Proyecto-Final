var Nombre = document.getElementById('Nombre');
var Precio = document.getElementById('Precio');
var Estado = document.getElementById('Estado');
var Referencia = document.getElementById('Referencia');
var Talla = document.getElementById('Talla');
var  listaProducto = document.getElementById('listaProducto');
var Guardar = document.getElementById('guardar');
var Actualizar = document.getElementById('actulaizar');

var db= firebase.firestore();
var idProducto = "";

function addProducto() {
    alert("xxxxxxxxxxxxxxxxxxxx");
    db.collection("Producto").add({
        Nombre: Nombre.value,
        Precio: Precio.value,
        Talla: Talla.value,
        Estado: Estado.value,
        Referencia:Referencia.value
        })
        .then(function (docRef) {
            console.log("PRODUCTO GUARDADO: ", docRef.id);
            listarProductos();
        })
        .catch(function (error) {
            console.error("Error: ", error);
        });
    
    
}


function listarProductos() {
    listaProducto.innerHTML = "";
    db.collection("Producto").get().then((querySnapshot) => {
        querySnapshot.forEach(async(doc) => {
            listaProducto.innerHTML += `
                <tr>
                   <td>${doc.data().Referencia}</td>
                    <td>${doc.data().Nombre}</td>
                    <td>${doc.data().Precio}</td>
                    <td>${doc.data().Talla}</td>
                    <td>${doc.data().Estado}</td>
                
                    <td>
                        <button onclick="ver('${doc.id}')" type="button" class="btn btn-default fas fa-edit"></button>
                        <button onclick="delProducto('${doc.id}')" type="button" class="btn btn-default fas fa-trash-alt"></button>
                        <button id= "vendido" onclick="vendido('${doc.id}')" type="button" class="far fa-thumbs-up"></button>
                    </td>
                </tr>
            `;
        });
    });
}

//lee la noticia y la muestra en los input 
function ver(id) {;
    idProducto = id;
    Guardar.classList.add('d-none');
    Actualizar.classList.remove('d-none');
    db.collection("Producto").doc(id)
        .onSnapshot(async function(doc) {
           Nombre.value = doc.data().Nombre;
           Precio.value = doc.data().Precio;
            Talla.value = doc.data().Talla;
            Estado.value = doc.data().Estado;
            Referencia.value = doc.data().Referencia;
        });
}

function actualizarProducto() {
    var dato = db.collection("Producto").doc(idNoticia);

    dato.update({
            Nombre: Nombre.value,
            Precio: Precio.value,
            Talla: Talla.value,
            Estado: Estado.value,
            Referencia:Referencia.value
        })
        .then(function() {
            console.log('Producto actualizado');
            Guardar.classList.remove('d-none');
            Actualizar.classList.add('d-none');
            listarProductos();
        })
        .catch(function(err) {
            console.error("Error: ", err);
        })
}

//Metodo para eliminar Noticas
function delProducto(id) {
    var dato = db.collection("Producto").doc(id).delete()
        .then(function() {
            console.log("Producto Eliminado!");
            listarProductos();
        }).catch(function(error) {
            console.error("Error: ", error);
        });

}






listarProductos();
