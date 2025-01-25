// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//variables
let nombresCargados = [];
let idSorteado = "";


//funcion para agregar un amigo a la lista
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo.length == "") {
        alert('Por favor, ingrese un nombre');
        return}
    else if (nombresCargados.includes(nombreAmigo)) {
        alert('Este nombre ya fue ingresado');
        vaciarCaja()
        return}
    else {
        nombresCargados.push(nombreAmigo);
        vaciarCaja();
        mostrarAmigos();
    }
    return;
}


function sorteoId(){
    let cantidadAmigos = nombresCargados.length;
    console.log(cantidadAmigos);
    idSorteado = Math.floor(Math.random() * cantidadAmigos);
    return
}

sorteoId();
//funcion para mostrar en el html los amigos que van cargando
function mostrarAmigos() {
    let amigos = document.getElementById('listaAmigos');
    amigos.innerHTML = '';
    for (let i = 0; i < nombresCargados.length; i++) {
        amigos.innerHTML += `<li>${nombresCargados[i]}</li>`;
    }
    return;
}

//funcion para sortear un amigo y devolverlo en el html
function sortearAmigo() {
    let amigoSorteado = document.getElementById('resultado');
    if (nombresCargados.length < 2) {
        alert('Por favor, ingrese al menos 2 nombres');
        return}
        else{
            sorteoId();
            console.log(idSorteado);
            amigoSorteado.innerHTML = nombresCargados[idSorteado];
            comportamientoDeBotones()
        }
        return;
    }
    
    //funcion para reiniciar el sorteo
    function reiniciarSorteo() {
        condicionesIniciales();
        return;
    }
    
    //funcion para vaciar la caja de texto
    function vaciarCaja() {
        document.getElementById('amigo').value = '';
        return;
    }
    
    //funcion para asignar las condiciones iniciales del juego
    function condicionesIniciales() {
        nombresCargados = [];
        document.getElementById('listaAmigos').innerHTML = '';
        document.getElementById('resultado').innerHTML = '';
        document.getElementById('reiniciarSorteo').disabled = true;
        document.getElementById('añadir').disabled = false;
        document.getElementById('sortearAmigo').disabled = false;
        document.getElementById('amigo').disabled = false;
        return;
    }
    
    //funcion para habilitar y deshabilitar los botones
    function comportamientoDeBotones() {
        document.getElementById('reiniciarSorteo').removeAttribute('disabled');
        document.getElementById('añadir').disabled = true;
        document.getElementById('sortearAmigo').disabled = true;
        document.getElementById('amigo').disabled = true;
        return;
    }