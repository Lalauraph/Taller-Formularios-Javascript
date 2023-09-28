const render = () => {
const formulario = document.querySelector("#registro");

const resultado = document.querySelector('#resultado');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = formulario.nombre.value;
    const apellido = formulario.apellido.value;
    const edad = formulario.edad.value;

    resultado.textContent = "El nombre de la persona es " + nombre + ", su apellido es " + apellido + " y su edad es " + edad + " años.";
});

}

window.onload = render;