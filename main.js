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