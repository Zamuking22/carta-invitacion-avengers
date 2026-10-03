const envoltura = document.querySelector('.envoltura-sobre');
const carta = document.querySelector('.carta');
const sello = document.querySelector('.sello');
const btnSi = document.querySelector('#btnSi');
const btnDuda = document.querySelector('#btnDuda');
const respuesta = document.querySelector('#respuesta');
const btnPD = document.querySelector('#btnPD');
const modalPD = document.querySelector('#modalPD');
const cerrarPD = document.querySelector('#cerrarPD');
const btnFlores = document.querySelector('#btnFlores');
const ramoFlores = document.querySelector('#ramoFlores');

let abierta = false;

function abrirCarta() {
    if (abierta) return;

    abierta = true;

    // Primero abre el sobre
    envoltura.classList.add('abierto');

    // Después muestra directamente la carta centrada
    setTimeout(() => {
        carta.classList.add('abierta');
        envoltura.classList.add('desactivar-sobre');
    }, 520);
}

function cerrarCarta() {
    if (!abierta) return;

    abierta = false;

    carta.classList.add('cerrando-carta');

    setTimeout(() => {

        carta.classList.remove('abierta');
        carta.classList.remove('cerrando-carta');

        envoltura.classList.remove('desactivar-sobre');

        setTimeout(() => {
            envoltura.classList.remove('abierto');
        }, 150);

    }, 350);
}

// Abrir con el sello
sello.addEventListener('click', (e) => {
    e.stopPropagation();
    abrirCarta();
});


// Abrir dando clic en el sobre
document.querySelector('.sobre').addEventListener('click', (e) => {

    if (!abierta && !e.target.closest('button')) {
        abrirCarta();
    }

});


// BOTÓN SÍ
btnSi.addEventListener('click', (e) => {

    e.stopPropagation();

    respuesta.textContent =
        'Misión aceptada. Ahora solo falta ver la funcion 😎🍿';

});


// BOTÓN DUDA
btnDuda.addEventListener('click', (e) => {

    e.stopPropagation();

    respuesta.textContent =
        'Se permite pensarlo... pero posiblemente me odias JAJAJAJA 👀';

});




// CERRAR HACIENDO CLIC FUERA
document.addEventListener('click', (e) => {

    if (
        abierta &&
        !e.target.closest('.envoltura-sobre')
    ) {

        cerrarCarta();

    }

});




btnPD.addEventListener('click', (e) => {
    e.stopPropagation();

    modalPD.classList.add('mostrar');
});

cerrarPD.addEventListener('click', (e) => {
    e.stopPropagation();

    modalPD.classList.remove('mostrar');
});

modalPD.addEventListener('click', (e) => {

    e.stopPropagation();

    if (e.target === modalPD) {
        modalPD.classList.remove('mostrar');
    }

});

btnFlores.addEventListener('click', (e) => {
    e.stopPropagation();

    ramoFlores.classList.toggle('mostrar');
});