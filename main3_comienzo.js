const alumno = [];

const inputNombre = document.getElementById('nombre-alumno');
const inputEscuela = document.getElementById('nombre-escuela');
const inputNumeros = document.getElementById('numeros');
const inputNumerosPC = document.getElementById('numeroscompu');
const botonCargar = document.getElementById('cargar');
const formRegistro = document.getElementById('myForm');



botonCargar.addEventListener('click', (e) => {
    e.preventDefault();
    if (validarInputs()) {
        cargarNumeros();
        registrarUsuario();
        cargarNumerosPC();
    } else {
        alert('Debe ingresar nombre y escuela. Solamente caracteres alfabéticos.')
    }
});



function actualizarNumerosElegidos(numeros) {
    inputNumeros.placeholder = numeros.join(', ');
}

const numerosAlumno = []; //array de los números elegidos por el alumno

function cargarNumeros() {
    for (let i = 0; i < 5; i++) {
        let numero = parseInt(prompt("Ingrese un número entre 100 y 900"));
        while (isNaN(numero) || numero < 100 || numero > 900) {
            numero = parseInt(prompt("El número ingresado no es válido. Ingrese un número entre 100 y 900"));
        }
        numerosAlumno.push(numero);
    }
    actualizarNumerosElegidos(numerosAlumno);
    localStorage.setItem('numerosAlumno', JSON.stringify(numerosAlumno));
    return numerosAlumno;
}

function registrarUsuario() {
    const nuevoAlumno = new Alumno(inputNombre.value, inputEscuela.value, numerosAlumno);
    alumno.push(nuevoAlumno);
    const tercerElemento = alumno[0].numerosAlumno;
    localStorage.setItem('numerosElegidos', JSON.stringify(tercerElemento));
    console.log(numerosAlumno);
    console.log(alumno);
    localStorage.setItem('alumno', JSON.stringify(alumno));
    console.log(alumno[0].nombre);
    localStorage.setItem('nombrealumno', JSON.stringify(alumno[0].nombre));
    localStorage.setItem('nombreescuela', JSON.stringify(alumno[0].escuela));
    console.log(alumno[0].numerosAlumno);
};


const numerosPC = [];

function cargarNumerosPC() {
    for (let i = 0; i < 5; i++) {
        let numeroCompu = Math.round(Math.random() * (900 - 100) + 100);
        numerosPC.push(numeroCompu);
    }
    actualizarNumerosPC(numerosPC);
    localStorage.setItem('numerosPC', JSON.stringify(numerosPC));
    console.log(numerosPC);
    numerosCompu = JSON.parse(localStorage.getItem('numerosPC'));
    return numerosPC;
}

function actualizarNumerosPC(numero) {
    inputNumerosPC.placeholder = numero.join(', ');
}

function limpiarFormulario(form) {
    form.reset();
    inputNumeros.placeholder = '';
    inputNumerosPC.placeholder = '';
    inputNombre2.placeholder = '';
    numerosAlumno.length = 0;
    numerosPC.length = 0;
    inputPrimosAlumnos.placeholder = '';
    inputPrimosPC.placeholder = '';
}


const solocaracteres = /^[A-Za-z\s]+$/;


function validarInputs() {
    return solocaracteres.test(inputNombre.value);
}

function validarCargas() {
    return numerosAlumno.length === 5; //valida que se hayan ingresado 5 números
}

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