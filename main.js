jQuery('document').ready(function($){

  var menuBoton = $('.barras-menu'),
      menu = $('.navigation ul');

  menuBoton.click(function() {

    if (menu.hasClass ('show')) {
      menu.removeClass('show');
    } else {
      menu.addClass('show');
    }

  });

});

const sectionPrincipal = document.getElementById('section-content');
const br = document.createElement('br');
let a = document.createElement('a');
a.textContent = ' Haz click aquí';

let posicion = 1;

function cambio(posicion) {

  const p = sectionPrincipal.querySelector('p');

  let p1 = document.createTextNode(P1_LIST[posicion]);
    let p2 = document.createTextNode(P2_LIST[posicion]);

    sectionPrincipal.querySelector('h2').textContent = H_LIST[posicion];
    sectionPrincipal.querySelector('img').src = PHOTO_LIST[posicion];

    a.setAttribute('href', ENLACES_LIST[posicion]);

    p.textContent = '';
    p.appendChild(p1);
    p.appendChild(br);
    p.appendChild(p2);
    p.appendChild(a);
}

function siguiente(event) {
  const boton = event.currentTarget;

  if (boton.getAttribute('value') === 'siguiente' && posicion < 3) {
    posicion++;

    cambio(posicion);
  }
  if (boton.getAttribute('value') === 'anterior' && posicion > 0){
    posicion--;

    cambio(posicion);
  }
}

const botonSiguiente = document.getElementById('siguiente').addEventListener('click', siguiente);
const botonAnterior = document.getElementById('anterior').addEventListener('click', siguiente);
