$(".btn-menu-drop").click(function() {
  console.log("OK");
  $("#container-menu-drop-down").toggle( "slow", function() { } );
});

$("#wrapper").click(function () {
  $("#container-menu-drop-down").hide("slow", function() {
    $(this).css("display", "none");
  });
});