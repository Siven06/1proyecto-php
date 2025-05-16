const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?: [A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/;
const telefonoRegex = /^\d{10}$/;
const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const contrasenaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const nombrePersona = document.getElementById('nombrePersona');
const telefono = document.getElementById('telefono');
const correo = document.getElementById('correo');
const contrasena = document.getElementById('contrasena');



nombrePersona.addEventListener('blur', () => {
    let valor = nombrePersona.value.trim();
    if (valor === '' || !nombreRegex.test(valor)) {
        alert('Por favor, ingresa un nombre válido (solo letras y espacios).');
    }
});


telefono.addEventListener('blur', () => {
    let valor = telefono.value.trim();
    if (valor === '' || !telefonoRegex.test(valor)) {
        alert('Por favor, ingresa un número de teléfono válido (10 dígitos).');
    }
});


correo.addEventListener('blur', () => {
    let valor = correo.value.trim();
    if (valor === '' || !correoRegex.test(valor)) {
        alert('Por favor, ingresa un correo electrónico válido.');
    }
});


contrasena.addEventListener('blur', () => {
    let valor = contrasena.value.trim();
    if (valor === '' || !contrasenaRegex.test(valor)) {
        alert('La contraseña debe tener al menos 8 caracteres, incluyendo una letra y un número.');
    }
});