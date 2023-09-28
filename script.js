const form = document.querySelector('form');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = form.nombre.value;
    const apellido = form.apellido.value;
    const edad = form.edad.value;

    resultado.textContent = `El nombre de la persona es "${nombre}", su apellido es "${apellido}" y su edad es "${edad}" años.`;
});