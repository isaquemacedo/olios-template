//Função toggle do botão (hamburguer) fixo
function menuDrop(a) {
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

//FUNÇÕES
//Função que seta a largura do container do slide
function setWidthCarrousel() {
  amount_item = $(".slider-itens").length;
  itemWidth = $(".slider-itens").width();
  $(".container-slider").width(itemWidth * (amount_item + 40));
}

//Função que retorna o indice do pin
function slider_value() {
  $('.slider-pin').click(function() {
    setWidthCarrousel();
    value = $(this).text();
    $(this).parent("container-pins").find("slider-pin").removeClass( "slider-pin-hover");
    $(this).toggleClass( "slider-pin-hover");
    slide_drag();
  });
}

//Função que movimenta o slide
function slide_drag() {
  var left_value = itemWidth * value;
  $(".container-slider").animate({"left" : "-" + left_value + "px"});
}

// function pinActive(pos){
//   if (pos === "0") {
//     $(pos).addClass("slider-pin-hover");
//     // console.log("if");
//   } else {
//     $(pos).removeClass("slider-pin-hover");
//     // console.log("else");
//   }
// }

//Ready da página
$(function() {
  menuDrop(".btn-menu-drop");
  setWidthCarrousel();
  slider_value();

  /*Slicker Settings*/
  $('.carrousel').slick({
    arrows: false,
    dots: true,
    dotsClass: 'myDots'
  });

});