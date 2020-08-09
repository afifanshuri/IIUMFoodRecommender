//navigation//
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
//content//

(function($) {
  var allPanels = $('.accordion > dd').hide();
  $('.accordion > dt > a').click(function() {
    $(this).parent().next().slideToggle();
    return false;
  });
})(jQuery);

$(document).ready(function(){
  $("#sglogo").fadeIn("slow");
})
