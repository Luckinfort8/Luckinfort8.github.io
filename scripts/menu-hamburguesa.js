const RELS_LIST = [
  'apple-touch-icon-144x144',
  'apple-touch-icon-72x72',
  'apple-touch-icon-precomposed',
  'shortcut icon'
]

const HREFS_LIST = [
  '../images/icons/apple-icon-114x114.png',
  '../images/icons/apple-icon-57x57.png',
  '../images/icons/apple-icon-60x60.png',
  '../images/icons/favicon.ico'
]

const head = document.querySelector('head');
const final = document.querySelector('#final');
for (let i = 0; i < 4; i++) {

  let link = document.createElement('link');
  link.setAttribute('rel',RELS_LIST[i]);
  link.setAttribute('href',HREFS_LIST[i]);

  head.insertBefore(link,final)
}

const navegacion = document.getElementById('navegacion');

function ocultar() {
  if (navegacion.className === 'show') {
    navegacion.classList.remove('show');
  } else {
    navegacion.classList.add('show');
  }
}

const menu = document.getElementById('barras').addEventListener('click', ocultar);
