//Função toggle do botão (hamburguer) fixo
function menuDrop(a){
  $(a).click(function() {
    console.log("OK");
    $("#container-menu-drop-down").toggle( "slow", function() { } );
  });

  $("#wrapper").click(function () {
    $("#container-menu-drop-down").hide("slow", function() {
      $(this).css("display", "none");
    });
  });
}

// FUNÇÕES DO SLIDE
//Variáveis
containerWidth = 0;
valuePin = 0;

//FUNÇÕES
//Função que seta a largura do container do slide
function setWidthCarrousel(){
  amount_item = $(".slider-itens").length;
  itemWidth = $(".slider-itens").width();
  $(".container-slider").width(itemWidth * amount_item);
}

//Função que retorna o indice do pin
function slider_value(){
  $('.slider-pin').click(function() {
    setWidthCarrousel();
    value = $(this).text();
    slide_drag();
  });
}

function slide_drag(){
  var left_value = itemWidth * value;
  $(".container-slider").animate({"left" : "-" + left_value + "px"});
}

//Ready da página
$(function() {
  menuDrop(".btn-menu-drop");
  setWidthCarrousel();
  slider_value();
});