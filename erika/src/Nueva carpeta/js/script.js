var user = document.getElementById('user'); //crear variable y obtener el usuario ingresado en la pagina web
var pass = document.getElementById('pass');

function inicio(){
    console.log("user: " +user.value);
    console.log("password: " + pass.value);
    if(user.value == "admin" && pass.value== "admin"){
        window.location = 'main.html'
    }
}

