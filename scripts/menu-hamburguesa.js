const navegacion = document.getElementById('navegacion');

function ocultar() {
  if (navegacion.className === 'show') {
    navegacion.classList.remove('show');
  } else {
    navegacion.classList.add('show');
  }
}

const menu = document.getElementById('barras').addEventListener('click', ocultar);