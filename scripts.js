// ------------ Main Menu -------------------

var menu_trigger = true;
var menu = document.getElementById('main-menu');
var document_width = document.body.clientWidth;
var main_menu_button = document.getElementById('main-menu-button');

window.addEventListener("load", function(event) {
    widthCheck();
  });

window.addEventListener("resize", function(event) {
    window.setTimeout(function() {
      if (document_width != document.body.clientWidth){
        document_width = document.body.clientWidth;
        widthCheck();
      }
    }, 500);
}, true);

function menuTrigger(){
    menu_trigger = (menu_trigger == true) ? false : true;
    menuDisplay();  
}

function menuDisplay(){
  if( menu_trigger == true ){
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }
}

function widthCheck(){
  if( document_width >= 1050 ){
      menu_trigger = true;
      menuDisplay();
    } else {
      menu_trigger = false;
      menuDisplay();
    }
    return menu_trigger;
}

main_menu_button.onclick = function(){
  menuTrigger();
};