var index;
var cafelist = document.getElementsByClassName("dropdown");

//toggle image to slide down cafe names
$(document).ready(function(){
  $(".imgtoggle").click(function(){
      index = $(this).parent().index();
      $(cafelist[index]).slideToggle("fast");
  })
})

//click cafe names to trigger popup details of cafe
$(document).ready(function(){
$("li").click(function(){
  $(this).children().fadeToggle();
  })
})

//logo animation when refresh
$(document).ready(function(){
  $(".logo").fadeIn("slow");
})
