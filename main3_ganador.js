const alumno = [];


const inputNombre2 = document.getElementById('nombre-alumno2')
const inputPrimosAlumnos = document.getElementById('primAlumno');
const inputPrimosPC = document.getElementById('primCompu');
const botonEnviar = document.getElementById('enviar');
const formRegistro = document.getElementById('my-form');
const botonConsultar = document.getElementById('consultar');
const botonContinuar = document.getElementById('seguir');
const salir = 's';


function actualizarNumerosElegidos(numeros) {
    inputNumeros.placeholder = numeros.join(', ');
}

const numerosAlumno = []; //array de los números elegidos por el alumno

const numerosPC = [];

function actualizarNumerosPC(numero) {
    inputNumerosPC.placeholder = numero.join(', ');
}

function validarInputs() {
    return inputNombre.value !== '' && inputEscuela.value !== '';
}

function validarCargas() {
    return numerosAlumno.length === 5; //valida que se hayan ingresado 5 números
}

botonConsultar.addEventListener('click', (eve) => {
    eve.preventDefault();
    const alumnoGuardado = JSON.parse(localStorage.getItem('alumno'));
    console.log(alumnoGuardado);
    const nombreAlumno = alumnoGuardado[0].nombre;
    const numerosAlumno = JSON.parse(localStorage.getItem('numerosAlumno'));
    const alumnosPrimosGuardados = obtenerNumerosPrimos(numerosAlumno);
    localStorage.setItem('alumnosPrimos', JSON.stringify(alumnosPrimosGuardados));
    const alumnosPrimos = JSON.parse(localStorage.getItem('alumnosPrimos'));
    console.log(`Los números primos de los elegidos por el alumno son: ${alumnosPrimos}`);

    inputNombre2.placeholder = nombreAlumno;
    inputPrimosAlumnos.placeholder = alumnosPrimosGuardados.join(', ');
    console.log(alumnosPrimosGuardados);
    const numerosPC = JSON.parse(localStorage.getItem('numerosPC'));
    const pcPrimos = obtenerNumerosPrimos(numerosPC);
    inputPrimosPC.placeholder = pcPrimos.join(', ');
    console.log(`Los números primos de los elegidos por la computadora son: ${pcPrimos}`);

    if (pcPrimos.length > alumnosPrimos.length) {
        alert(`Ganó la Computadora con ${pcPrimos.length} números primos!!!`);
    } else if (pcPrimos.length < alumnosPrimos.length) {
        alert(`Ganó ${nombreAlumno} con ${alumnosPrimos.length} números primos!!!`);
    } else if (pcPrimos.length === alumnosPrimos.length) {
        alert(`Hubo empate entre la Computadora y ${nombreAlumno}`);
    } else {
        alert(`No se encontró ningún número primo!`);
    }
});

function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero !== 1;
}

function obtenerNumerosPrimos(numeros) {
    const numerosPrimos = [];
    for (let i = 0; i < numeros.length; i++) {
        if (esPrimo(numeros[i])) {
            numerosPrimos.push(numeros[i]);
        }
    }
    return numerosPrimos;
}

function actualizarNumerosPrimosAlumnos(numeros) {
    inputPrimosAlumnos.placeholder = numeros.join(', ');
}

function actualizarNumerosPrimosPC(numeros) {
    inputPrimosPC.placeholder = numeros.join(', ');
}


botonContinuar.addEventListener('click', (evento) => {
    evento.preventDefault();
    const nombreAlumno = inputNombre2.value;
    localStorage.setItem('nombreAlumno', JSON.stringify(nombreAlumno));
    limpiarFormulario(formRegistro);
    window.location.href = './comienzo.html';
});

function limpiarFormulario(form) {
    form.reset();
    inputNombre2.placeholder = '';
    numerosAlumno.length = 0;
    numerosPC.length = 0;
    inputPrimosAlumnos.placeholder = '';
    inputPrimosPC.placeholder = '';
}

botonEnviar.addEventListener('click', (evento) => {
    evento.preventDefault();
    limpiarFormulario(formRegistro);
    window.location.href = '../index.html';
});