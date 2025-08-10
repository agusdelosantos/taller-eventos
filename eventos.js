let div = document.getElementById('contenedor');
let boton = document.querySelector('button');

div.addEventListener('click', function() {
    alert('Hola! Soy el div');
});

boton.addEventListener('click', function(event){
    event.stopPropagation();
});